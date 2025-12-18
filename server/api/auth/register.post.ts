import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, email, password } = body

  if (!username || !email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan campos obligatorios (username, email, password)',
    })
  }

  // Verificar si el usuario ya existe
  const existingUser = await prisma.usuarios.findUnique({
    where: { email },
  })

  if (existingUser) {
    throw createError({
      statusCode: 409,
      statusMessage: 'El correo electrónico ya está registrado',
    })
  }

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10)

  // Crear el usuario
  const newUser = await prisma.usuarios.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  })

  // Generar token JWT
  const token = jwt.sign(
    { userId: newUser.id.toString(), email: newUser.email },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: '7d' }
  )

  // Convertir BigInt a string para la respuesta
  return {
    token,
    user: {
      id: newUser.id.toString(),
      username: newUser.username,
      email: newUser.email,
    },
  }
})
