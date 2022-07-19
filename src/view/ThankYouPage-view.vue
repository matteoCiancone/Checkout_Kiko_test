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
            <Recap :item="cartData" />
            <AccordionManager :isMultiple="true" class="accordion-typ">
                <AccordionItem>
                    <template v-slot:accordion-header>
                        <h3>Dati di spedizione</h3>
                    </template>
                    <template v-slot:accordion-panel>
                        <Address v-bind:item="cartData.cart.deliveryAddress" />
                    </template>
                </AccordionItem>
                <AccordionItem>
                    <template v-slot:accordion-header>
                        <h3>Dati di fatturazione</h3>
                    </template>
                    <template v-slot:accordion-panel>
                        <Address v-bind:item="cartData.cart.billingAddress" />
                    </template>
                </AccordionItem>
                <AccordionItem>
                    <template v-slot:accordion-header>
                        <h3>Spedizione</h3>
                    </template>
                    <template v-slot:accordion-panel>
                        <h2>{{ cartData.cart.deliveryMode.name }} <span>{{ cartData.cart.deliveryMode.code }}</span>
                        </h2>
                        <p>{{ cartData.cart.deliveryMode.description }}</p>
                    </template>
                </AccordionItem>
                <AccordionItem>
                    <template v-slot:accordion-header>
                        <h3>Pagamento</h3>
                    </template>
                    <template v-slot:accordion-panel>
                        <h2>{{ cartData.cart.paymentMode.code }}</h2>
                        <p>{{ cartData.cart.paymentMode.description }}</p>
                    </template>
                </AccordionItem>
            </AccordionManager>
            <a class="backHome-btn" href="">Torna alla Home</a>
        </div>
        <KissesBanner v-bind:item="cartData" />
    </div>
</template>


<script>
import CheckoutCard from '../components/Checkout-card.vue'
import AccordionManager from '../components/Accordion-manager.vue'
import AccordionItem from '../components/Accordion-item.vue'
import Recap from '../components/Recap.vue'
import KissesBanner from '@/components/kisses-banner.vue'
import json from '../../cart-typ.json'
import Address from '@/components/Address-item.vue'

export default {
    name: "thankYouPage",
    components: {
        CheckoutCard,
        AccordionManager,
        Recap,
        AccordionItem,
        KissesBanner,
        Address
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