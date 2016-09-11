'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './layouts/home.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // { path: '*', redirect: '/blog' },
    { path: '/blog', component: Home }
  ]
})