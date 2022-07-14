import Vue from "vue";
import VueRouter from "vue-router";
import RecapView from "../view/Recap-view.vue"
import thankYouPage from "../view/ThankYouPage-view.vue"
import ProductPage from "../components/ProductInfo-Accordion.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'recap',
    component: RecapView,
  },
  {
    path: '/thankyou',
    name: 'thankYouPage',
    component: thankYouPage,
  },
  {
    path: '/product',
    name: 'productPage',
    component: ProductPage,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
