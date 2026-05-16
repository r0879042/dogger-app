import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import naive from 'naive-ui'

import App from './App.vue'
import router from './router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(naive)
app.use(VueQueryPlugin, { queryClient })

app.mount('#app')