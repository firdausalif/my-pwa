import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Landing', meta: {title: 'Mobcom'} },
  { path: '/login', component: 'Login', meta: {title: 'Login - Mobcom'} },
  { path: '/register', component: 'Register', meta: {title: 'Register - Mobcom'} },
  { path: '/home', component: 'Home', meta: {title: 'Home - Mobcom'} }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
