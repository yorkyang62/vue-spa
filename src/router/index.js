import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      // beforeEnter: (to, from, next) => {
      //   if(to.name == "About"){
          
      //   }
      //   console.log(to);
      //   next();
      // }
    },
    {
      path: '/contact',
      name: '/Contact',
      component: Contact
    }
  ]
})
