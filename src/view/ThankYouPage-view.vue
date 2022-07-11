<template>
    <div class="thankYouPage">
        <div class="typ-card">
            <div class="typ-header">
                <h1>Ordine confermato</h1>
                <h2 class="orderNumber">Numero d'ordine</h2>
                <h2 class="cartCode">#{{ item.cart.code }}</h2>
                <a href="">Registrati e traccia facilmente il tuo ordine</a>
            </div>
            <h2>Il tuo ordine</h2>
            <CheckoutCard v-for="data in cartData.cart.entries" v-bind:item="data" />
            <Recap v-bind:item="cartData" />
            <CheckoutAccordion class="accordion-typ">
                <template v-slot:header>
                    <h3>Dati di spedizione</h3>
                </template>
                <template v-slot:checkout-card>
                </template>
            </CheckoutAccordion>
            <CheckoutAccordion class="accordion-typ">
                <template v-slot:header>
                    <h3>Dati di fatturazione</h3>
                </template>
                <template v-slot:checkout-card>
                </template>
            </CheckoutAccordion>
            <CheckoutAccordion class="accordion-typ">
                <template v-slot:header>
                    <h3>Spedizione</h3>
                </template>
                <template v-slot:checkout-card>
                </template>
            </CheckoutAccordion>
            <CheckoutAccordion class="accordion-typ">
                <template v-slot:header>
                    <h3>Pagamento</h3>
                </template>
                <template v-slot:checkout-card>
                </template>
            </CheckoutAccordion>
            <form class="form-Btn-home" action="">
                <button class="backHome-btn" type="submit">Torna alla Home</button>
            </form>
        </div>

        <KissesBanner v-bind:item="cartData" />

    </div>
</template>


<script>
import CheckoutCard from '../components/Checkout-card.vue'
import CheckoutAccordion from '../components/Checkout-accordion.vue'
import Recap from '../components/Recap.vue'
import KissesBanner from '@/components/kisses-banner.vue'
import json from '../../cart-typ.json'

export default {
    name: "thankYouPage",
    components: {
        CheckoutCard,
        CheckoutAccordion,
        Recap,
        KissesBanner
    },
    data() {
        return {
            cartData: json,
        }
    },
    props: ["item"]
}
</script>

   <style scoped lang="scss">
   @import "../../src/scss/component/typ.scss"
   </style>