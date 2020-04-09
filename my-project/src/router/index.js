import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login  from '@/page/Login';
import Home from '@/page/Home';
import Map from '@/page/Map';
import Monitor from '@/page/Monitor';
import Alarm from '@/page/Alarm';
import TimeShare from '@/page/TimeShare';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },{
      path:'/home',
      name:'home',
      component:Home,
      children:[{
        path:'/map',
        component:Map
      },{
        path:'/monitor',
        component:Monitor
      },{
        path:'/alarm',
        component:Alarm
      },{
        path:'/timeShare',
        component:TimeShare
      }]
    },
  ]
})
