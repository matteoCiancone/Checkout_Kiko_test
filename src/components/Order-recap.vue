<template>
    <div class="card">
        <img src="" class="card-img" alt=".">
        <div class="card-body">
            <h2>{{ item.entries[0].product.name }}</h2>
            <div class="prod-color"></div>
            <span class="prod-quantity">x1</span>
            <span class="prod-price">10&euro;</span>
        </div>
        <!--TOTALE DA AGGIUNGERE-->
    </div>
</template>


<script>
import json from "../../cartData.json";
export default {
    name: "order-recap",
    data() {
        return {
            cartData: json
        }
    },
    props: ["item"]
}

</script>

<style scoped lang="scss">
@import "../../src/scss/component/order-recap.scss"
</style>