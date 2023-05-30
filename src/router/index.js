import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/index'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/index',
      children: [
        {
          path: '/home/index',
          name: 'Index',
          component: Index
        },
      ]
    },
    
  ]
})
