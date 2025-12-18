<script setup lang="ts">
interface Props {
  id: string | number
  name: string
  icon: string
  color?: string
}

withDefaults(defineProps<Props>(), {
  color: 'primary'
})
</script>

<template>
  <div 
    class="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700"
  >
    <!-- Background Glow Effect -->
    <div 
      class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
      :class="`bg-${color}-500`"
    />

    <!-- Icon -->
    <div 
      class="mb-4 p-3 rounded-full bg-white dark:bg-gray-900 shadow-sm group-hover:scale-110 transition-transform duration-200"
    >
      <UIcon 
        :name="icon" 
        class="w-8 h-8" 
        :class="`text-${color}-500`" 
      />
    </div>

    <!-- Name -->
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
      {{ name }}
    </h3>
  </div>
</template>
