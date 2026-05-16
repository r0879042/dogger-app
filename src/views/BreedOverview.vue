<script setup>
import { useQuery } from '@tanstack/vue-query'
import { RouterLink } from 'vue-router'

import {
  NCard,
  NGrid,
  NGridItem,
  NSpin,
  NAlert,
} from 'naive-ui'

import { fetchBreedsWithImages } from '../api/dogs'

const {
  data: breeds,
  isLoading,
  error,
} = useQuery({
  queryKey: ['breeds-with-images'],
  queryFn: fetchBreedsWithImages,
})
</script>

<template>
  <main class="page">
    <div class="container">
      <h1 class="title">Dogger App</h1>

      <p class="subtitle">
        Explore beautiful dog breeds
      </p>

      <div v-if="isLoading" class="state">
        <NSpin size="large" />
      </div>

      <NAlert
        v-else-if="error"
        title="Error"
        type="error"
      >
        Something went wrong while fetching breeds.
      </NAlert>

      <NGrid
        v-else
        cols="1 s:2 m:3 l:4"
        responsive="screen"
        x-gap="20"
        y-gap="20"
      >
        <NGridItem
          v-for="item in breeds"
          :key="item.breed"
        >
          <RouterLink :to="`/breed/${item.breed}`">
            <NCard hoverable class="breed-card">
              <div class="image-wrapper">
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.breed"
                />
              </div>

              <h3 class="breed-name">
                {{ item.breed }}
              </h3>
            </NCard>
          </RouterLink>
        </NGridItem>
      </NGrid>
    </div>
  </main>
</template>

<style scoped>
.title {
  font-size: 3rem;
  margin-bottom: 10px;
}

.subtitle {
  margin-bottom: 40px;
  opacity: 0.7;
}

.state {
  display: flex;
  justify-content: center;
  padding: 60px;
}

.breed-card {
  border-radius: 22px;
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.breed-card:hover {
  transform: translateY(-6px);
}

.image-wrapper {
  height: 220px;
  overflow: hidden;
  border-radius: 14px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.4s ease,
    opacity 0.4s ease;
}

.breed-card:hover img {
  transform: scale(1.05);
}

.breed-name {
  text-transform: capitalize;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 16px;
}
</style>