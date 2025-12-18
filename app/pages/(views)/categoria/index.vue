<script setup lang="ts">
import CategoryCard from '~/components/category/CategoryCard.vue';

const categories = [
  { id: 1, name: 'Música', icon: 'i-heroicons-musical-note', color: 'pink' },
  { id: 2, name: 'Videojuegos', icon: 'i-heroicons-puzzle-piece', color: 'purple' },
  { id: 3, name: 'Tecnología', icon: 'i-heroicons-cpu-chip', color: 'blue' },
  { id: 4, name: 'Noticias', icon: 'i-heroicons-newspaper', color: 'red' },
  { id: 5, name: 'Deportes', icon: 'i-heroicons-trophy', color: 'yellow' },
  { id: 6, name: 'Aprendizaje', icon: 'i-heroicons-academic-cap', color: 'green' },
  { id: 7, name: 'Películas', icon: 'i-heroicons-film', color: 'orange' },
  { id: 8, name: 'Moda', icon: 'i-heroicons-shopping-bag', color: 'fuchsia' },
  { id: 9, name: 'Comedia', icon: 'i-heroicons-face-smile', color: 'amber' },
  { id: 10, name: 'Viajes', icon: 'i-heroicons-globe-alt', color: 'sky' },
  { id: 11, name: 'Cocina', icon: 'i-heroicons-cake', color: 'rose' },
  { id: 12, name: 'Ciencia', icon: 'i-heroicons-beaker', color: 'indigo' },
]
</script>

<template>
    <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-8 text-white">
            Explorar Categorías
        </h1>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <CategoryCard 
                v-for="category in categories"
                :key="category.id"
                v-bind="category"
            />
        </div>
    </div>
</template>
