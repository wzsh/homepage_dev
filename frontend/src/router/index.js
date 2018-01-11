import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Login from '@/components/Login'

Vue.use(Router)
Vue.use(VueResource)
Vue.prototype.API_URL = 'http://localhost:8989'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
