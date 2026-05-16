<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { NButton, NCard, NSpin, NAlert } from 'naive-ui'

import { fetchBreedImage } from '../api/dogs'

const route = useRoute()
const breed = route.params.breed
const imageLoaded = ref(false)

const {
  data: imageUrl,
  isLoading,
  error,
} = useQuery({
  queryKey: ['breed-image', breed],
  queryFn: () => fetchBreedImage(breed),
  staleTime: Infinity,
})
</script>

<template>
  <main class="page">
    <div class="container detail-container">
      <RouterLink to="/">
        <NButton>← Back to breeds</NButton>
      </RouterLink>

      <h1 class="title">{{ breed }}</h1>

      <div v-if="isLoading" class="state">
        <NSpin size="large" />
      </div>

      <NAlert v-else-if="error" title="Error" type="error">
        Something went wrong while fetching this dog image.
      </NAlert>

      <NCard v-else class="image-card">
        <div class="image-wrapper">
          <NSpin v-if="!imageLoaded" size="large" class="image-loader" />

          <img
            :src="imageUrl"
            :alt="breed"
            :class="{ loaded: imageLoaded }"
            @load="imageLoaded = true"
          />
        </div>
      </NCard>
    </div>
  </main>
</template>

<style scoped>
.detail-container {
  max-width: 800px;
}

.title {
  text-transform: capitalize;
  font-size: 3rem;
  margin: 30px 0;
}

.state {
  display: flex;
  justify-content: center;
  padding: 60px;
}

.image-card {
  border-radius: 24px;
  overflow: hidden;
}

.image-wrapper {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-loader {
  position: absolute;
  z-index: 1;
}

img {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 18px;
  opacity: 0;
  transform: scale(0.98);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

img.loaded {
  opacity: 1;
  transform: scale(1);
}
</style>