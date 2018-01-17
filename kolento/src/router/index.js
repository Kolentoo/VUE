import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import video from '@/pages/video'
import other from '@/pages/other'

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
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
