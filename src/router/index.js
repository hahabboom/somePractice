import Vue from 'vue'
import Router from 'vue-router'
import PowerGrid from '@/components/PowerGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/powergrid',
      name: 'PowerGrid',
      component: PowerGrid
    }
  ]
})
