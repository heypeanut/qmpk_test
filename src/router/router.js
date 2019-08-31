import Vue from 'vue'
import Router from 'vue-router'

import List from '@/views/list.vue'
import Rank from '@/views/rank.vue'
import Analysis from '@/views/analysis.vue'
import videoDetails from '@/views/video-details.vue'



Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/list'
    },
    {
      path:'/video-details',
      component:videoDetails
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/analysis',
      component:Analysis
    },
  ]
})