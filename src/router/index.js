import Vue from "vue";
import VueRouter from "vue-router";
import RecapView from "../view/Recap-view.vue"
import ConfirmView from "../view/Confirm-view.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'recap',
    component: RecapView,
  },
  {
    path: 'confirm',
    name: 'confirmView',
    component: ConfirmView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
