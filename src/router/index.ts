import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import Activities from '../views/Activities.vue';
import Activity from '../views/Activity.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/atividades',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/atividades/:activityId',
    name: 'Activity',
    component: Activity,
    props: true
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