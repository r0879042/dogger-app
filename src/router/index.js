import { createRouter, createWebHistory } from 'vue-router'

import BreedOverview from '../views/BreedOverview.vue'
import BreedDetail from '../views/BreedDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: BreedOverview,
    },
    {
      path: '/breed/:breed',
      name: 'breed-detail',
      component: BreedDetail,
      props: true,
    },
  ],
})

export default router