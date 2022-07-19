<template>
    <div>
        <div class="Accordion">
            <button @click="toggleAccordion()" class="accordion" :aria-expanded="isOpen"
                :aria-controls="`collapse${_uid}`">
                <slot name="accordion-header" />
                <svg class="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.99877 11.2833L14.7351 7L16 8.14459L10.6311 13L9.36595 12.9998L4 8.14443L5.26529 7.00016L9.99877 11.2833Z"
                        fill="black" />
                </svg>

            </button>

            <transition name="slide-down">
                <div v-show="isOpen" :id="`collapse${_uid}`" class="panel">
                    <slot name="accordion-panel" />
                </div>
            </transition>

        </div>
    </div>

</template>


<script>
import AccordionManager from './Accordion-manager.vue';
export default {
    name: "AccordionItem",
    components: {
        AccordionManager,
    },
    inject: ["AccordionManager"],

    data() {
        return {
            index: null,
        };
    },
    computed: {
        isOpen() {
            return this.index == this.AccordionManager.active
        }

    },
    methods: {
        toggleAccordion() {

            if (this.AccordionManager.multiple == true) {
                this.index = this.AccordionManager.active;
            } else if (this.isOpen) {
                this.AccordionManager.active = null;
            } else {
                this.AccordionManager.active = this.index;
            }
        }
    },
    created() {
        this.index = this.AccordionManager.count++
    },

}



</script>


    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped lang="scss">
    @import "../../src/scss/component/accordion.scss"
    </style>
