import Vue from 'vue'
import VueRouter from 'vue-router'
import Total from '@/views/Total'
import Countries from '@/views/Countries'
import Country from '@/views/Country'
import store from '@/store'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Total',
      component: Total
    },
    {
      path: '/countries',
      name: 'Countries',
      component: Countries
    },
    {
      path: '/country/:queryName',
      name: 'Country',
      component: Country,
      props: true,
      beforeEnter (to, from, next) {
        const queryName = to.params.queryName
        store.dispatch('newCountryName', queryName)
        next()
      }
    }
  ]
})
