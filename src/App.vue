<template>
  <div id="app">
    <CheckoutForm />
    <CheckoutAccordion>
      <template v-slot:header>
        <AccordionHeader />
      </template>
      <template v-slot:checkout-card>
        <CheckoutCard v-for="item in cartData" v-bind:item="item" />
      </template>
    </CheckoutAccordion>
  </div>
</template>

<script>
import CheckoutForm from './components/Checkout-form.vue'
import CheckoutAccordion from './components/Checkout-accordion.vue'
import AccordionHeader from './components/Accordion-header.vue'
import CheckoutCard from './components/Checkout-card.vue'
import json from "../cartData.json";

export default {
  name: 'app',
  components: {
    CheckoutForm,
    CheckoutAccordion,
    AccordionHeader,
    CheckoutCard
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
