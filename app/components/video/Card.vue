<script setup lang="ts">
interface Props {
  id: string | number
  title: string
  thumbnail: string
  avatar: string
  channelName: string
  views: string
  createdAt: string
  duration: string
}

defineProps<Props>()
</script>

<template>
  <div class="group cursor-pointer">
    <!-- Thumbnail Container -->
    <div class="relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
      <img 
        :src="thumbnail" 
        :alt="title" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
      />
      <div class="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
        {{ duration }}
      </div>
    </div>

    <!-- Info -->
    <div class="flex gap-3 mt-3 px-1">
      <UAvatar :src="avatar" :alt="channelName" size="md" />
      <div class="flex-1">
        <h3 class="text-base font-semibold text-white line-clamp-2 leading-tight group-hover:text-primary-500">
          {{ title }}
        </h3>
        <div class="text-sm text-gray-400 mt-1">
          <p class="hover:text-gray-300">
            {{ channelName }}
          </p>
          <p>
            {{ views }} vistas • {{ createdAt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
