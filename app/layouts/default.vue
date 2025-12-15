<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans selection:bg-primary-500 selection:text-white">
    <header class="border-b border-gray-800 backdrop-blur-md bg-gray-900/80 sticky top-0 z-50">
      <UContainer class="h-16 flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold bg-linear-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Streamilo
        </NuxtLink>
        <nav class="flex items-center gap-6">
          <NuxtLink to="/home" class="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Home
          </NuxtLink>
          <UButton
            to="/login"
            color="primary"
            variant="solid"
            label="Login"
            size="sm"
          />
        </nav>
      </UContainer>
    </header>

    <main class="py-8">
      <UContainer>
        <slot />
      </UContainer>
    </main>

    <footer class="border-t border-gray-800 py-8 mt-12 bg-gray-900">
      <UContainer class="text-center text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Streamilo. All rights reserved.
      </UContainer>
    </footer>
  </div>
</template>

<style>
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #111827; 
}
::-webkit-scrollbar-thumb {
  background: #374151; 
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #4b5563; 
}
</style>
