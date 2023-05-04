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
