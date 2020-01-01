import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Cart = () => import('@/views/cart/Cart.vue')
const Profile = () => import('@/views/profile/Profile.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'default',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home

  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  // mode: 'history', //路由模式
  base: process.env.BASE_URL,
  routes
})

export default router
