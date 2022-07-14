<template>
    <div class="thankYouPage">
        <div class="typ-card">
            <div class="typ-header">
                <h1>Ordine confermato</h1>
                <h2 class="orderNumber">Numero d'ordine</h2>
                <h2 class="cartCode">#{{ cartData.cart.code }}</h2>
                <a href="">Registrati e traccia facilmente il tuo ordine</a>
            </div>
            <h2>Il tuo ordine</h2>
            <CheckoutCard v-for="data in cartData.cart.entries" v-bind:item="data" />
            <Recap v-bind:item="cartData" />
            <Accordion class="accordion-typ">
                <template v-slot:accordion-header>
                    <h3>Dati di spedizione</h3>
                </template>
                <template v-slot:accordion-panel>
                    <p>Nome: <span>{{ cartData.cart.deliveryAddress.firstName }}</span></p>
                    <p>Cognome: <span>{{ cartData.cart.deliveryAddress.lastName }}</span></p>
                    <p>Indirizzo: <span>{{ cartData.cart.deliveryAddress.line1 }}</span></p>
                    <p>Città: <span>{{ cartData.cart.deliveryAddress.town }}</span></p>
                    <p>CAP: <span>{{ cartData.cart.deliveryAddress.postalCode }}</span></p>
                    <p>Telefono: <span>{{ cartData.cart.deliveryAddress.phone }}</span></p>
                    <p>Nazione: <span>{{ cartData.cart.deliveryAddress.country.name }}</span></p>

                </template>
            </Accordion>
            <Accordion class="accordion-typ">
                <template v-slot:accordion-header>
                    <h3>Dati di fatturazione</h3>
                </template>
                <template v-slot:accordion-panel>
                    <p>Nome: <span>{{ cartData.cart.billingAddress.firstName }}</span></p>
                    <p>Cognome: <span>{{ cartData.cart.billingAddress.lastName }}</span></p>
                    <p>Indirizzo: <span>{{ cartData.cart.billingAddress.line1 }}</span></p>
                    <p>Città: <span>{{ cartData.cart.billingAddress.town }}</span></p>
                    <p>CAP: <span>{{ cartData.cart.billingAddress.postalCode }}</span></p>
                    <p>Telefono: <span>{{ cartData.cart.billingAddress.phone }}</span></p>
                    <p>Nazione: <span>{{ cartData.cart.billingAddress.country.name }}</span></p>
                </template>
            </Accordion>
            <Accordion class="accordion-typ">
                <template v-slot:accordion-header>
                    <h3>Spedizione</h3>
                </template>
                <template v-slot:accordion-panel>
                    <h2>{{ cartData.cart.deliveryMode.name }} <span>{{ cartData.cart.deliveryMode.code }}</span></h2>
                    <p>{{ cartData.cart.deliveryMode.description }}</p>
                </template>
            </Accordion>
            <Accordion class="accordion-typ">
                <template v-slot:accordion-header>
                    <h3>Pagamento</h3>
                </template>
                <template v-slot:accordion-panel>
                    <h2>{{ cartData.cart.paymentMode.code }}</h2>
                    <p>{{ cartData.cart.paymentMode.description }}</p>
                </template>
            </Accordion>
            <a class="backHome-btn" href="">Torna alla Home</a>
        </div>

        <KissesBanner v-bind:item="cartData" />

    </div>
</template>


<script>
import CheckoutCard from '../components/Checkout-card.vue'
import Accordion from '../components/Accordion.vue'
import Recap from '../components/Recap.vue'
import KissesBanner from '@/components/kisses-banner.vue'
import json from '../../cart-typ.json'

export default {
    name: "thankYouPage",
    components: {
        CheckoutCard,
        Accordion,
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