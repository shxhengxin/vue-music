import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './../components/recommend/recommend'
import Singer from './../components/singer/singer'
import Rank from './../components/rank/rank'
import Search from './../components/search/search'

Vue.use(Router)

let routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
