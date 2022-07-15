<template>
    <div class="recap-view">
        <div class="recap-view-body">
            <CheckoutForm />
            <Accordion>
                <AccordionItem>
                    <template v-slot:accordion-header>
                        <AccordionHeader v-bind:item="cartData.cart" />
                    </template>
                    <template v-slot:accordion-panel>
                        <CheckoutCard v-for="data in cartData.cart.entries" v-bind:item="data" />
                        <Recap v-bind:item="cartData" />
                        <a href="">Torna al carrello per modificare l'ordine</a>
                    </template>
                </AccordionItem>
            </Accordion>
            <div>
                <h1 style="margin-top:500px ;">Footer</h1>
            </div>

        </div>
    </div>
</template>

<script>
import CheckoutForm from '../components/Checkout-form.vue'
import Accordion from '../components/Accordion.vue'
import AccordionHeader from '../components/Accordion-header.vue'
import AccordionItem from "../components/Accordion-item.vue"
import CheckoutCard from '../components/Checkout-card.vue'
import Recap from '../components/Recap.vue'
import json from "../../cartData.json";

export default {
    name: "recapView",
    components: {
        CheckoutForm,
        Accordion,
        AccordionHeader,
        AccordionItem,
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


 <style scoped lang="scss">
 @import "../../src/scss/component/recap-view.scss"
 </style>