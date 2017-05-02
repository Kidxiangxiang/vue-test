import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import myService from '@/components/myService'
import vipIntroduce from '@/components/vipIntroduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/myService',
    	name: 'myService',
    	component: myService
    },
    {
    	path: '/vipIntroduce',
    	name: 'vipIntroduce',
    	component: vipIntroduce
    }
  ]
})
