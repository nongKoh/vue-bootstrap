import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import child from '@/components/Loginchild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login/:name',
      name: 'login',
      component: Login,
      children: [
        {
          path: 'child',
          component: child
        }
      ]
    }
  ]
})
