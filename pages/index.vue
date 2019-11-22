<template>
  <slides :slides="slides" :length="lengthSlides" />
</template>

<script>
import { mapState, mapGetters } from "vuex";
import slides from "@/components/home/slides.vue";
export default {
  components: {
    slides
  },
  computed: {
    ...mapState("slides", ["slides"]),
    ...mapGetters({
      lengthSlides: "slides/lengthSlides"
    })
  }
};
</script>

<style scoped>
</style>