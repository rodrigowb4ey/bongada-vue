import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import RegisterConsumption from '@/views/RegisterConsumption.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: AppHome },
    { path: '/register_consumption', name: 'RegisterConsumption', component: RegisterConsumption }
  ]
})

export default router
