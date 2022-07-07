
<template>
  <div id="app">
    <div>
      <router-link to="confirm">Order confirm page</router-link>
    </div>
    <RecapView />
  </div>
</template>

<script>
import RecapView from './view/Recap-view.vue';
import VueRouter from 'vue-router';


export default {
  name: 'app',
  components: {
    RecapView
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
