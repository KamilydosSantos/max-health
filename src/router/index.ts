import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import Activities from '../views/Activities.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: About
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/atividades',
    name: 'atividades',
    component: Activities
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;