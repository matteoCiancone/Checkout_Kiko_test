<template>
    <div class="card">
        <img v-bind:src="item.product.baseOptions[0].options[0].appImages[0].resizes[3].url" class="card-img" alt=".">
        <div class="card-body">
            <h2>{{ item.product.name }}</h2>
            <img class="prod-color" v-bind:src="item.product.baseOptions[0].options[0].imagesByFormat.original.image"
                alt="Colore prodotto">
            <span class="prod-quantity">x{{ item.quantity }}</span>
            <span class="prod-price">{{ item.totalPrice.formattedValue }}</span>
        </div>
    </div>
</template>


<script>
import json from "../../cartData.json";
export default {
    name: "checkout-card",
    data() {
        return {
            cartData: json
        }
    },
    props: ["item"]
}

</script>

<style scoped lang="scss">
@import "../../src/scss/component/checkout-card.scss"
</style>