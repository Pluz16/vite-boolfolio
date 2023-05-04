import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import About from './pages/About.vue'
import ProjectDetail from './pages/ProjectDetail.vue';
import BaseLayout from './layouts/BaseLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: BaseLayout
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      layout: BaseLayout
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      layout: BaseLayout
    }
  },
  {
    path: '/projects/:id',
    name: 'projectDetail',
    component: ProjectDetail,
    meta: {
      layout: BaseLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.layout) {
    to.meta.layout = BaseLayout;
  }
  next();
});

export default router;
