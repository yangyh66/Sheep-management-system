import Vue from 'vue'
import Router from 'vue-router'
import {myStore} from '../main';
import index from '@/page/index'
import login from '@/page/login'
import msBankUserInfo from '@/page/msBankUserInfo'
import msBankDetails from '@/page/msBankDetails'

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: 'msBankUserInfo',
          component: msBankUserInfo
        },
        {
          path: 'msBankDetails',
          component: msBankDetails
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   myStore.commit('rememberLastRouter', from.name);
//   if (localStorage.getItem('token') && to.name === 'login') {
//     next(false)
//   } else if (!localStorage.getItem('token') && to.name === "car") {
//     next(false)
//   } else {
//     next()
//   }
// });
export default router;
