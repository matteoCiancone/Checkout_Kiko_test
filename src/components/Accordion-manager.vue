<template>
    <div>
        <slot></slot>
    </div>
</template>


<script>
import AccordionItem from "../components/Accordion-item.vue"
export default {
    name: "Accordion",
    components: {
        AccordionItem
    },
    data() {
        return {
            Accordion: {
                count: 0,
                active: null,
                multiple: this.isMultiple,
            },
        }
    },
    provide() {
        return {
            Accordion: this.Accordion,
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