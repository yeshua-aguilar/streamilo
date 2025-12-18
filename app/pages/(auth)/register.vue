<script setup lang="ts">
import axios from 'axios'

definePageMeta({
  layout: 'auth'
})

const state = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const toast = useToast()
const router = useRouter()

const onSubmit = async () => {
  if (state.password !== state.confirmPassword) {
    toast.add({
      title: 'Error',
      description: 'Las contraseñas no coinciden',
      color: 'error'
    })
    return
  }

  try {
    await axios.post('/api/auth/register', {
      username: state.username,
      email: state.email,
      password: state.password
    })

    toast.add({
      title: 'Éxito',
      description: 'Usuario registrado correctamente',
      color: 'success'
    })
    
    router.push('/login')
  } catch (error: any) {
    const errorMessage = error.response?.data?.statusMessage || error.message || 'Ocurrió un error al registrarse'
    toast.add({
      title: 'Error',
      description: errorMessage,
      color: 'error'
    })
  }
}
</script>

<template>
  <div class="space-y-6">
    <div class="text-left">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
        Crear cuenta
      </h2>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Únete a Streamilo y comienza tu experiencia
      </p>
    </div>

    <UForm :state="state" @submit="onSubmit" class="space-y-6">
      <UFormField label="Usuario" name="username">
        <UInput v-model="state.username" type="text" placeholder="Tu usuario" icon="i-heroicons-user" class="w-full" />
      </UFormField>

      <UFormField label="Correo electrónico" name="email">
        <UInput v-model="state.email" type="email" placeholder="tu@email.com" icon="i-heroicons-envelope" class="w-full" />
      </UFormField>

      <UFormField label="Contraseña" name="password">
        <UInput v-model="state.password" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" class="w-full" />
      </UFormField>

      <UFormField label="Confirmar contraseña" name="confirmPassword">
        <UInput v-model="state.confirmPassword" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" class="w-full" />
      </UFormField>

      <UButton type="submit" block size="lg">
        Registrarse
      </UButton>
    </UForm>

    <div class="text-center text-sm">
      <p class="text-gray-600 dark:text-gray-400">
        ¿Ya tienes una cuenta?
        <NuxtLink to="/login" class="font-medium text-primary-600 hover:text-primary-500">
          Inicia Sesión aquí
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
