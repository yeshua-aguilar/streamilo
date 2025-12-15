<script setup lang="ts">
onMounted(() => {
  setTimeout(() => {
    navigateTo('/home')
  }, 2500)
})
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center min-h-[50vh] gap-8">
      <!-- Logo/Icon Animation -->
      <div class="relative flex items-center justify-center">
        <div class="absolute inset-0 bg-primary-500/20 blur-xl rounded-full animate-pulse"></div>
        <div
          class="relative w-16 h-16 bg-gray-900 ring-1 ring-gray-800 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
          <div
            class="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary-500 to-transparent animate-shimmer">
          </div>
          <UIcon name="i-heroicons-bolt-solid"
            class="w-8 h-8 text-primary-400 animate-[pulse_3s_ease-in-out_infinite]" />
        </div>
      </div>

      <!-- Loading Bar & Text -->
      <div class="flex flex-col items-center gap-3 w-64">
        <div class="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <div class="h-full bg-primary-500 w-1/3 rounded-full animate-loading">
          </div>
        </div>
        <div class="text-sm font-medium text-gray-500 animate-pulse">
          Initializing Stream...
        </div>
      </div>
    </div>
  </div>
</template>
