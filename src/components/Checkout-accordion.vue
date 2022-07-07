<template>
    <div class="Cart__Main">
        <button @click="toggleAccordion()" class="accordion" :aria-expanded="isOpen" :aria-controls="`collapse${_uid}`">
            <slot name="header" />
            <svg class="arrow" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                clip-rule="evenodd">
                <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
            </svg>
        </button>

        <transition name="slide-down">
            <div v-show="isOpen" :id="`collapse${_uid}`" class="panel">
                <slot name="checkout-card" />
            </div>
        </transition>

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
