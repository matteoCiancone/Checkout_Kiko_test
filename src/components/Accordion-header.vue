<template>
    <div class="accordionHeader">
        <h2 class="card-title">Il tuo ordine <span>{{ item.totalPrice.formattedValue }}</span></h2>
        <p>comprende spese di spedizione stimate</p>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
        </svg>
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
