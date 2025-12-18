import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan campos obligatorios (email, password)',
    })
  }

  // Buscar usuario por email
  const user = await prisma.usuarios.findUnique({
    where: { email },
  })

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Credenciales inválidas',
    })
  }

  // Verificar contraseña
  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Credenciales inválidas',
    })
  }

  // Generar token JWT
  const token = jwt.sign(
    { userId: user.id.toString(), email: user.email },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: '7d' }
  )

  // Convertir BigInt a string para la respuesta
  return {
    token,
    user: {
      id: user.id.toString(),
      username: user.username,
      email: user.email,
      role_id: user.role_id ? user.role_id.toString() : null,
    },
  }
})
