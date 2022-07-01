<template>
  <div id="app">
    <CheckoutForm />
    <CheckoutAccordion>
      <template v-slot:header>
        <AccordionHeader />
      </template>
      <template v-slot:order-recap>
        <OrderRecap />
      </template>

    </CheckoutAccordion>
  </div>
</template>

<script>
import CheckoutForm from './components/Checkout-form.vue'
import CheckoutAccordion from './components/Checkout-accordion.vue'
import AccordionHeader from './components/Accordion-header.vue'
import OrderRecap from './components/Order-recap.vue'

export default {
  name: 'app',
  components: {
    CheckoutForm,
    CheckoutAccordion,
    AccordionHeader,
    OrderRecap
  }
}
</script>

<style lang="scss">
@import "../src/scss/main.scss"
</style>
