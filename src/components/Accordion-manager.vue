<template>
    <div>
        <slot></slot>
    </div>
</template>


<script>
import AccordionItem from "../components/Accordion-item.vue"
export default {
    name: "AccordionManager",
    components: {
        AccordionItem
    },
    data() {
        return {
            AccordionManager: {
                count: 0,
                active: null,
                multiple: this.isMultiple,
            },
        }
    },
    provide() {
        return {
            AccordionManager: this.AccordionManager,
        }
    },


    props: {
        isMultiple: {
            type: Boolean,
            default: false,
        }
    }
}
</script>