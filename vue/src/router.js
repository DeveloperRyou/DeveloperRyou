import { createWebHistory, createRouter } from 'vue-router';
import Main from '@/views/main'
import Project from '@/views/project'
import Article from '@/views/article'
import PageNotFound from '@/views/404'

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
  },
  {
    path: '/:pathMatch(.*)*', 
    name: '404 Error',
    component: PageNotFound 
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});