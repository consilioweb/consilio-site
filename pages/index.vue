<template>
  <div id="home">
    <slides :slides="slides" :length="lengthSlides" />
    <about />
    <methodology />
    <cases />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import slides from "@/components/home/slides.vue";
import about from "@/components/home/about.vue";
import cases from "@/components/home/cases.vue";
import methodology from "@/components/home/methodology.vue";
export default {
  components: {
    slides,
    about,
    methodology,
    cases
  },
  computed: {
    ...mapState("slides", ["slides"]),
    ...mapGetters({
      lengthSlides: "slides/lengthSlides"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_reset.scss";
@import "./assets/scss/_fonts.scss";
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";
</style>