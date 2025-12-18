export default defineNuxtRouteMiddleware((to, from) => {
  // Obtener el token de la cookie
  const token = useCookie('auth_token')

  // Si no hay token, redirigir al login
  if (!token.value) {
    return navigateTo('/login')
  }
})
