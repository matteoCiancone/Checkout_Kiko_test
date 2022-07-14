<script setup>
import { RouterLink } from "vue-router";
</script>


<template>
  <div id="app">
    <div>
      <router-link to="/">Order confirm page</router-link>
      <router-link to="/thankyou">Thank you page</router-link>
      <router-link to="/product">Product page</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import RecapView from './view/Recap-view.vue';
import ThankYouPage from './view/ThankYouPage-view.vue';
import json from '../cart-typ.json'



export default {
  name: 'app',
  components: {
    RecapView,
    ThankYouPage,
    json
  },
  data() {
    return {
      cartData: json,
    }
  },
}
</script>

<style lang="scss">
@import "../src/scss/main.scss"
</style>
