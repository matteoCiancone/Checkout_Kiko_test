<template>
    <div class="card">
        <img src="" class="card-img" alt=".">
        <div class="card-body">
            <h2>{{ item.entries[0].product.name }}</h2>
            <img class="prod-color" src="" alt="Colore prodotto">
            <span class="prod-quantity">x{{ item.entries[0].quantity }}</span>
            <span class="prod-price">{{ item.totalPriceWithTax.formattedValue }}</span>
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