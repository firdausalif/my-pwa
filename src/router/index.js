import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // Path URL
      name: 'Login', // Name of route
      component: Login, // Vue component
      meta: {title: 'Login - Mobcom'} // Title of the page
    }
  ]
})
