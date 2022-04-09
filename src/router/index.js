import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import showProductDetails from '../views/showProductDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Product',
    component: ProductList
  },
  {
    path: '/Cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },

  // Show Product Details
  {
    path: '/Product/:id',
    name: 'showDetails',
    component: showProductDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
