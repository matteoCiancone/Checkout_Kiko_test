<template>

    <div class="order-recap">
        <hr>
        <div class="recap">
            <h2 class="sub-tot">Sub-totale <span> {{ item.subTotal }}</span></h2>
            <h2 v-if="item.cart.totalDiscounts.value > 0" class="discount green">Promo <span class="promo">{{
                    item.cart.totalDiscounts.formattedValue
            }} </span></h2>
            <h2 v-if="item.cart.totalGiftCard.value > 0" class="discount green">Codice sconto <span class="promo">{{
                    item.cart.totalGiftCard.formattedValue
            }} </span></h2>
            <h2 v-if="item.loyalty.issuedPoint > 0" class="discount green">Buono KIKO kisses <span class="promo">{{
                    item.loyalty.issuedPoint
            }} </span></h2>
            <h2 class="ship-price">Spese di spedizione (stimate) <span>{{ item.cart.deliveryCost.formattedValue
            }}</span>
            </h2>

        </div>
        <hr>

        <div class="final-tot">
            <h2 class="total">Totale ordine <span>{{ item.cart.totalPrice.formattedValue }}</span></h2>
            <p>IVA inclusa</p>
        </div>
    </div>


</template>


<script>

export default {
    name: "recap",
    data() {

        return {

        }
    },
    mounted() {  //da qui posso richiamare le funzioni
    },
    computed: {  //funzioni che danno valori più "secchi"
        // showPromo: function() {
        // return promo.value > 0
    },

    methods: {}, //scrivo funzioni
    props: ["item"]
}

</script>


<style scoped lang="scss">
@import "../../src/scss/component/recap.scss"
</style>