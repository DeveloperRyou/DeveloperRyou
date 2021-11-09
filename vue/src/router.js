import { createWebHistory, createRouter } from 'vue-router';
import Main from '@/views/main'
import Project from '@/views/project'
import Article from '@/views/article'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});