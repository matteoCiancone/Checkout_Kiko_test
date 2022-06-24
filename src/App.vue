<template>
  <div id="app">
    <CheckoutForm></CheckoutForm>
    <CheckoutAccordion></CheckoutAccordion>
  </div>
</template>

<script>
import CheckoutForm from './components/Checkout-form.vue'
import CheckoutAccordion from './components/Checkout-accordion.vue'

export default {
  name: 'app',
  components: {
    CheckoutForm,
    CheckoutAccordion
  }
}
</script>

<style lang="scss">
@import "../src/scss/main.scss"
</style>
