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
    component: Activities,
    children: [
      {
        path: '/musculacao',
        name: 'musculacao',
        component: Activity,
        props: { activityType: 'musculacao' }
      },
      {
        path: '/boxing',
        name: 'boxing',
        component: Activity,
        props: { activityType: 'boxing' }
      },
      {
        path: '/aerobico',
        name: 'aerobico',
        component: Activity,
        props: { activityType: 'aerobico' }
      },
      {
        path: '/padel',
        name: 'padel',
        component: Activity,
        props: { activityType: 'padel' }
      },
      {
        path: '/pilates',
        name: 'pilates',
        component: Activity,
        props: { activityType: 'pilates' }
      },
      {
        path: '/judo',
        name: 'judo',
        component: Activity,
        props: { activityType: 'judo' }
      },
      {
        path: '/natacao',
        name: 'natacao',
        component: Activity,
        props: { activityType: 'natacao' }
      }
    ]
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