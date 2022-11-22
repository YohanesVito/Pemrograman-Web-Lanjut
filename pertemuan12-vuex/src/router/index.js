import { createRouter, createWebHistory } from 'vue-router'
import TambahView from '../views/TambahView.vue'
import LihatView from '../views/LihatView.vue'

const routes = [
  {
    path: '/',
    name: 'tambah',
    component: TambahView
  },
  {
    path: '/lihat',
    name: 'lihat',
    component: LihatView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
