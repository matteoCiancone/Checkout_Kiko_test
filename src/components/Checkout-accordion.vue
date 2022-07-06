<template>
    <div class="Cart__Main">
        <button @click="toggleAccordion()" class="accordion" :aria-expanded="isOpen" :aria-controls="`collapse${_uid}`">
            <slot name="header" />
        </button>
        <div v-show="isOpen" :id="`collapse${_uid}`" class="panel">
            <slot name="checkout-card" />
        </div>
    </div>
</template>


<script>
export default {
    name: "Accordion",
    data() {
        return {
            isOpen: false,
        };
    },

    mounted() {
    },

    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        }
    },
}



</script>


    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="scss">
    @import "../../src/scss/component/accordion.scss"
    </style>
