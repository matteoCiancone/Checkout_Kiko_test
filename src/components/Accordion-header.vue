<template>
    <div class="accordionHeader">
        <h2 class="card-title">Il tuo ordine <span>{{ item.totalPrice.formattedValue }}</span></h2>
        <p>comprende spese di spedizione stimate</p>

    </div>


</template>




<script>

export default {
    name: "accordion-header",
    data() {
        return {
        }
    },
    props: ["item"]
}
</script>

 <style scoped lang="scss">
 @import "../../src/scss/component/accordion-header.scss"
 </style>
