import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'
import About from './components/About.vue'
import ProjectDetail from './pages/ProjectDetail.vue';



const router = createRouter({
  history: createWebHistory(),
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component:Portfolio,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects/:id',
    name: 'projectDetail',
    component: ProjectDetail,
  }
  
]
})

export {router}
