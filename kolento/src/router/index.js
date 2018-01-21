import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import video from '@/pages/video'
import other from '@/pages/other'
import pics from '@/pages/pics'

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
      path: '/pics',
      name: 'pics',
      component: pics
    },
    {
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
