
<template>
  <div id="app">
    <div>
      <router-link to="thankyou">Order confirm page</router-link>
    </div>
    <ThankYouPage />
  </div>
</template>

<script>
import RecapView from './view/Recap-view.vue';
import ThankYouPage from './view/ThankYouPage-view.vue';


export default {
  name: 'app',
  components: {
    RecapView,
    ThankYouPage
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
@import "../src/scss/main.scss"
</style>
