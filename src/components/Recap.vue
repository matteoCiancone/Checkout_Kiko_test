<template>

    <div class="order-recap">
        <hr>
        <div class="recap">
            <h2 class="sub-tot">Sub-totale <span>22,88 &euro;</span></h2>
            <h2 class="discount green">Promo <span>22 &euro;</span></h2>
            <h2 class="discount green">Codice sconto <span>22,88 &euro;</span></h2>
            <h2 class="discount green">Buono KIKO kisses <span>22,88 &euro;</span></h2>
            <h2 class="ship-price">Spese di spedizione (stimate) <span>22,88 &euro;</span></h2>

        </div>
        <hr>

        <div class="final-tot">
            <h2 class="total">Totale ordine <span>22,88 &euro;</span></h2>
            <p>IVA inclusa</p>
            <a href="">Torna al carrello per modificare l'ordine</a>
        </div>
    </div>


</template>


<script>
export default {
    name: "recap"
}

</script>


<style scoped lang="scss">
@import "../../src/scss/component/recap.scss"
</style>