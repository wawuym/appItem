import Vue from 'vue'
import Router from 'vue-router'
import Home from '@page/home/Home'
import Classify from '@page/classify/Classify'
import Person from "@page/person/PersonCenter"
import Shopping from "@page/shopping/ShoppingCar"
import Login from "@page/person/Login"


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:"/classify",
      name:"Classify",
      component:Classify
    },
    {
      path:"/person",
      name:"Person",
      component:Person
    },
    {
      path:"/shopping",
      name:"Shopping",
      component:Shopping
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})



