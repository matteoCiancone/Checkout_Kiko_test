<template>
    <div class="recap-view">
        <CheckoutForm />
        <CheckoutAccordion>
            <template v-slot:header>
                <AccordionHeader v-bind:item="cartData.cart" />
            </template>
            <template v-slot:checkout-card>
                <CheckoutCard v-for="data in cartData.cart.entries" v-bind:item="data" />
                <Recap v-bind:item="cartData.cart" />
            </template>
        </CheckoutAccordion>
        <div>
            <h1 style="margin-top:500px ;">Footer</h1>
        </div>

    </div>
</template>

<script>
import CheckoutForm from '../components/Checkout-form.vue'
import CheckoutAccordion from '../components/Checkout-accordion.vue'
import AccordionHeader from '../components/Accordion-header.vue'
import CheckoutCard from '../components/Checkout-card.vue'
import Recap from '../components/Recap.vue'
import json from "../../cartData.json";

export default {
    name: "recapView",
    components: {
        CheckoutForm,
        CheckoutAccordion,
        AccordionHeader,
        CheckoutCard,
        Recap
    },
    data() {
        return {
            cartData: json,
        }
    },
}

</script>