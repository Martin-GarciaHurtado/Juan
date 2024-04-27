import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true
    },
    children: [

    ],
    //redirect: {name: 'loginPage'}
  },
  {
    path: '/userpage',
    name: 'UserPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User/User.vue')
  },
  {
    path: '/adminpage',
    name: 'AdminPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Admin.vue')
  },
  {
    path: '/ganancias',
    name: 'GananciasPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Ganancias.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'loginPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/LoginPage.vue')
  },
  {
    path: '/singup',
    name: 'singup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/SingUp.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, netx) =>{
  if(to.matched.some(ruta => ruta.meta.requireAuth)){
    const user = sessionStorage.length;
    if( user > 0 ){
      netx();
    }else{
      netx({
        name: 'login',
      })
    }
  }else{
    netx();
  }
})


export default router
