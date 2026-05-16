<script setup>
import { NConfigProvider, NMessageProvider } from 'naive-ui'
</script>

<template>
  <NConfigProvider>
    <NMessageProvider>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </NMessageProvider>
  </NConfigProvider>
</template>