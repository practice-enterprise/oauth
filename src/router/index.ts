import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import DiscordRedirect from '../views/DiscordRedirect.vue';
import CanvasRedirect from '../views/CanvasRedirect.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/oauth2/discord',
    name: 'Discord OAuth',
    component: DiscordRedirect,
  },
  {
    path: '/oauth2/canvas',
    name: 'Canvas OAuth',
    component: CanvasRedirect,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
