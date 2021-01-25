import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Admin from './views/Admin'
import Welcome from './views/Admin/Welcome'
import BookDetial from './views/Admin/BookDetail'
import BookBorrow from './views/Admin/BookBorrow'
import BookSort from './views/Admin/BookSort'
import User from './views/Admin/User'
import UserMessage from './views/Admin/UserMessage'
import BookReturn from './views/Admin/BookReturn'
import Manager from './views/Admin/Manager'

const routes = [
  {path: '',redirect: '/login'},
  {path:'/login',component:Login},
  {path:'/admin',name: "admin",component:Admin,
    children: [
      {path:'/book/welcome',name: 'welcome',component:Welcome},
      {path:'/book/detail',name: 'detail',component:BookDetial},
      {path:'/book/borrow',name: 'borrow',component:BookBorrow},
      {path:'/book/sort',name: 'sort',component:BookSort},
      {path:'/book/user',name: 'user',component:User},
      {path:'/book/usermessage',name: 'usermessage',component:UserMessage},
      {path:'/book/return',name: 'return',component:BookReturn},
      {path:'/book/manager',name: 'manager',component:Manager},
  ]
},
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
