import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'Home' */ 'pages/home.vue')
  }, {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName: 'City' */ 'pages/city.vue')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: 'Detail' */ 'pages/detail.vue')
  }]
})
