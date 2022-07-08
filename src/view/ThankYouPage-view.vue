<template>
    <div class="thankYouPage">
        <div class="typ-card">
            <div class="typ-header">
                <h1>Ordine confermato</h1>
                <h2>Numero d'ordine</h2>
                <h3></h3>
                <h3></h3>
                <a href=""></a>
            </div>
            <h2>Il tuo ordine</h2>
            <CheckoutCard v-for="data in cartData.cart.entries" v-bind:item="data" />
            <Recap v-bind:item="cartData" />

        </div>
        <KissesBanner />

    </div>
</template>


<script>
import CheckoutCard from '../components/Checkout-card.vue'
import Recap from '../components/Recap.vue'
import KissesBanner from '@/components/kisses-banner.vue'
import json from '../../cart-typ.json'

export default {
    name: "thankYouPage",
    components: {
        CheckoutCard,
        Recap,
        KissesBanner
    },
    data() {
        return {
            cartData: json,
        }
    },
}
</script>

   <style scoped lang="scss">
   @import "../../src/scss/component/typ.scss"
   </style>