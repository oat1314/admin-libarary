import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Admin from './views/Admin'
import Welcome from './views/Admin/Welcome'
import BookDetial from './views/Admin/BookDetail'
import BookModify from './views/Admin/BookModify'
import BookSort from './views/Admin/BookSort'
import User from './views/Admin/User'
import UserMessage from './views/Admin/UserMessage'

const routes = [
  {path: '',redirect: '/login'},
  {path:'/login',component:Login},
  {path:'/admin',name: "admin",component:Admin,
    children: [
      {path:'/book/welcome',name: 'welcome',component:Welcome},
      {path:'/book/detail',name: 'welcome',component:BookDetial},
      {path:'/book/modify',name: 'welcome',component:BookModify},
      {path:'/book/sort',name: 'welcome',component:BookSort},
      {path:'/book/user',name: 'welcome',component:User},
      {path:'/book/usermessage',name: 'welcome',component:UserMessage},
  ]
},
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
