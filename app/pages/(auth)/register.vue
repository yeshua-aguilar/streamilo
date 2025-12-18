<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const state = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const onSubmit = () => {
  // TODO: Implementar lógica de registro
  console.log('Register attempt', state)
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
      <UFormField label="Usuario" name="name">
        <UInput v-model="state.name" type="text" placeholder="Tu nombre" icon="i-heroicons-user" class="w-full" />
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
