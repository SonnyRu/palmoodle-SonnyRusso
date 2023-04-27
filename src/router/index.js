import { createRouter, createWebHistory } from 'vue-router'

import Connexion from '../components/Connexion.vue'
import Global from '../components/Global.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/',
      name: 'Global',
      component: Global
    }
  ]
})

export default router