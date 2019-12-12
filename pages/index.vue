<template>
  <div id="home">
    <slides :slides="slides" :length="lengthSlides" />
    <about :about="about" />
    <methodology />
    <cases :cases="cases" :length="lengthCases" />
    <recent-posts :posts="posts" :length="lengthPosts" />
    <testimonials :testimonials="testimonials" :length="lengthTestimonials" />
    <clients :clients="clients" :length="lengthClients" />
    <cta
      title="Marketing Digital inteligente e feito por quem respira comunicação digital."
      textButton="DIAGNÓSTICO GRATUITO"
    />
    <newsletter />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import slides from "@/components/home/slides.vue";
import about from "@/components/home/about.vue";
import cases from "@/components/home/cases.vue";
import methodology from "@/components/home/methodology.vue";
import recentPosts from "@/components/blog/recentPosts.vue";
import testimonials from "@/components/home/testimonials.vue";
import clients from "@/components/home/clients.vue";
import cta from "@/components/home/cta.vue";
import newsletter from "@/components/home/newsletter.vue";

export default {
  created() {
    this.$store.commit("LOGO_HEADER_PRIMARY");
    this.$store.commit("HOVER_BUTTON_HEADER", false);
  },
  components: {
    slides,
    about,
    methodology,
    cases,
    recentPosts,
    testimonials,
    clients,
    cta,
    newsletter
  },
  computed: {
    ...mapState("slides", ["slides"]),
    ...mapState("cases", ["cases"]),
    ...mapState("posts", ["posts"]),
    ...mapState("about", ["about"]),
    ...mapState("testimonials", ["testimonials"]),
    ...mapState("clients", ["clients"]),
    ...mapState("core", ["info"]),
    ...mapGetters({
      lengthSlides: "slides/lengthSlides",
      lengthCases: "cases/lengthCases",
      lengthPosts: "posts/lengthPosts",
      lengthTestimonials: "testimonials/lengthTestimonials",
      lengthClients: "clients/lengthClients"
    })
  },
  head() {
    return {
      title: this.info.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.info.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.info.keywords
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";

#home {
  width: 100%;
}
</style>