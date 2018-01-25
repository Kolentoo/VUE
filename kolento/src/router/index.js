import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import course from '@/pages/course'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
    path: '/',
    redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:'/course',
      name:'course',
      component:course
    }
  ]
})
