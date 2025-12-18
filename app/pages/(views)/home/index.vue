<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const videos = [
  {
    id: 1,
    title: "Construyendo un Clon de YouTube con Nuxt 3 y Tailwind CSS",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    avatar: "https://i.pravatar.cc/150?u=1",
    channelName: "DevTuber",
    views: "120K",
    createdAt: "hace 2 días",
    duration: "14:20"
  },
  {
    id: 2,
    title: "Aprende Vue.js en 10 minutos - Tutorial Completo",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    avatar: "https://i.pravatar.cc/150?u=2",
    channelName: "VueMastery",
    views: "54K",
    createdAt: "hace 5 horas",
    duration: "10:01"
  },
  {
    id: 3,
    title: "Los mejores setups de programación 2024",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    avatar: "https://i.pravatar.cc/150?u=3",
    channelName: "TechSetup",
    views: "1.2M",
    createdAt: "hace 1 semana",
    duration: "25:45"
  },
  {
    id: 4,
    title: "Música Lofi para programar / estudiar 24/7",
    thumbnail: "https://images.unsplash.com/photo-1630713815150-2c847025c1d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://i.pravatar.cc/150?u=4",
    channelName: "Lofi Girl",
    views: "15K",
    createdAt: "EN VIVO",
    duration: "LIVE"
  },
  {
    id: 5,
    title: "Review del nuevo Framework de JavaScript",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    avatar: "https://i.pravatar.cc/150?u=5",
    channelName: "JS World",
    views: "8.5K",
    createdAt: "hace 3 horas",
    duration: "18:30"
  },
  {
    id: 6,
    title: "Cómo optimizar tu base de datos PostgreSQL",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    avatar: "https://i.pravatar.cc/150?u=6",
    channelName: "DB Admin",
    views: "32K",
    createdAt: "hace 4 días",
    duration: "45:10"
  },
  {
    id: 7,
    title: "Viaje a Japón - Vlog Diario #45",
    thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    avatar: "https://i.pravatar.cc/150?u=7",
    channelName: "TravelVlogger",
    views: "890K",
    createdAt: "hace 2 semanas",
    duration: "22:15"
  },
  {
    id: 8,
    title: "Receta de Pizza Casera estilo Italiano",
    thumbnail: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    avatar: "https://i.pravatar.cc/150?u=8",
    channelName: "Chef En Casa",
    views: "2.1M",
    createdAt: "hace 1 año",
    duration: "12:50"
  }
]
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6 text-white">
      Recomendados
    </h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
      <VideoCard
        v-for="video in videos"
        :key="video.id"
        v-bind="video"
      />
    </div>
  </div>
</template>
