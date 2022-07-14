<template>
  <div id="accordionVueComponent" class="accordion-container">
    <Accordion v-for="(item, index) in tabsContent" :key="index">
      <template v-slot:accordion-header>
        <h3 class="accordion-title"> {{ item.buttonText }}</h3>
      </template>
      <template v-slot:accordion-panel>
        <div v-if="item.youtubeURL" class="accordion-video">
          <iframe class="video" :src="item.youtubeURL" allowfullscreen=""></iframe>
        </div>
        <div v-else v-html="item.content"></div>
      </template>
    </Accordion>
  </div>
</template>
 


<script>
import Accordion from "../components/Accordion.vue"
export default {
  name: 'ProductInfoAccordion',
  components: { Accordion },
  data() {
    return {
      tabsContent: [],
    }
  },
  mounted: function () {
    this.getData();
  },
  methods: {
    getData() {
      const buttonContents = document.querySelectorAll('.ProductInfo-Btn');
      buttonContents.forEach(element => {
        this.tabsContent.push({
          buttonText: element.innerText,
          content: document.getElementById(element.dataset.targetPanel).innerHTML,
          youtubeURL: element.getAttribute("data-youtube")
        });
      });
    }
  }
}

</script>
<style scoped>
.accordion-container {
  background-color: white;
}

.accordion-title {
  margin: 8px 0;
  padding: 10px;
}

.accordion-video {
  text-align: center;
}
</style>

