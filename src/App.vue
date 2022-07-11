
<template>
  <div id="app">
    <div>
      <router-link to="thankyou">Order confirm page</router-link>
    </div>
    <ThankYouPage v-bind:item="cartData" />
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
