<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const state = reactive({
  email: '',
  password: ''
})

const onSubmit = () => {
  // TODO: Implementar lógica de login
  console.log('Login attempt', state)
}
</script>

<template>
  <div class="space-y-6">
    <div class="text-left">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
        Bienvenido de nuevo
      </h2>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Ingresa tus credenciales para acceder a tu cuenta
      </p>
    </div>

    <UForm :state="state" @submit="onSubmit" class="space-y-6">
      <UFormField label="Correo electrónico" name="email">
        <UInput v-model="state.email" type="email" placeholder="tu@email.com" icon="i-heroicons-envelope" class="w-full" />
      </UFormField>

      <UFormField label="Contraseña" name="password">
        <UInput v-model="state.password" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" class="w-full" />
      </UFormField>

      <div class="flex items-center justify-between">
        <UCheckbox label="Recordarme" />
        <NuxtLink to="#" class="text-sm text-primary-600 hover:text-primary-500 font-medium">
          ¿Olvidaste tu contraseña?
        </NuxtLink>
      </div>

      <UButton type="submit" block size="lg">
        Iniciar Sesión
      </UButton>
    </UForm>

    <div class="text-center text-sm">
      <p class="text-gray-600 dark:text-gray-400">
        ¿No tienes una cuenta?
        <NuxtLink to="/register" class="font-medium text-primary-600 hover:text-primary-500">
          Regístrate aquí
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
