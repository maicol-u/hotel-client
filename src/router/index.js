import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/nuevo-hotel',
    name: 'new-hotel',
    component: () => import('../views/CreateHotelView.vue')
  },
  {
    path: '/hotel/:id',
    name: 'hotel',
    component: () => import('../views/DetailsHotelView.vue')
  },
  {
    path: '/hotel/edit/:id',
    name: 'hotel-edit',
    component: () => import('../views/EditHotelView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
