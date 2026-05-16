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

import { fetchBreeds } from '../api/dogs'

const {
  data: breeds,
  isLoading,
  error,
} = useQuery({
  queryKey: ['breeds'],
  queryFn: fetchBreeds,
})
</script>

<template>
  <main class="page">
    <div class="container">
      <h1 class="title">Dogger App</h1>

      <p class="subtitle">
        Explore dog breeds from the Dog API
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
          v-for="breed in breeds"
          :key="breed"
        >
          <RouterLink :to="`/breed/${breed}`">
            <NCard hoverable class="breed-card">
              <h3 class="breed-name">
                {{ breed }}
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
  border-radius: 20px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.breed-card:hover {
  transform: translateY(-4px);
}

.breed-name {
  text-transform: capitalize;
  text-align: center;
  font-size: 1.1rem;
}
</style>