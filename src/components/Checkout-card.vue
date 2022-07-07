<template>
    <div class="card">
        <img v-bind:src="item.product.imagesByFormat['72Wx72H'].image" class="card-img" alt=".">
        <div class="card-body">
            <h2>{{ item.product.name }}</h2>
            <div class="prod-info">
                <img class="prod-color"
                    v-bind:src="item.product.baseOptions[0].options[0].imagesByFormat.original.image"
                    alt="Colore prodotto">
                <span class="prod-quantity">x{{ item.quantity }}</span>
                <span class="prod-price">{{ item.totalPrice.formattedValue }}</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "checkout-card",
    data() {
        return {
        }
    },
    props: ["item"]
}

</script>

<style scoped lang="scss">
@import "../../src/scss/component/checkout-card.scss"
</style>