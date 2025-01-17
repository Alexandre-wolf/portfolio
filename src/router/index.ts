import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Learning from '../views/Learning.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apprentissages',
      name: 'learning',
      component: Learning
    },
    {
      path: '/projet/:id',
      name: 'project',
      component: ProjectDetail
    }
  ]
})

export default router