import { createRouter, createWebHistory } from 'vue-router';

import Home from '../view/Home.vue';
import InvoiceView from '../view/InvoiceView.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/invoice/:invoiceId',
    component: InvoiceView,
    name: 'Invoice'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;