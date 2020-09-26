import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Products from "@/views/Products";
import Users from "@/views/Users";
import CreateProduct from "@/views/CreateProduct";
import CreateUser from "@/views/CreateUser";
import Login from "@/views/Login"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
   {
     path: '/users',
     name: 'users',
     component: Users,
   },
  {
    path: '/createProduct',
    name: 'createProduct',
    component: CreateProduct,
  },
  {
    path: '/createUser',
    name: 'createUser',
    component: CreateUser,
  },
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
