<template>
  <div id="home">
    <slides :slides="slides" :length="lengthSlides" />
    <about :about="about" />
    <methodology />
    <cases :cases="cases" :length="lengthCases" />
    <recent-posts :posts="recent" :length="lengthPosts" />
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

export default {
  mounted() {
    this.$initMautic();
    this.$store.commit("LOGO_HEADER_PRIMARY");
    this.$store.commit("HOVER_BUTTON_HEADER", false);
  },
  components: {
    slides: () => import("@/components/home/slides.vue"),
    about: () => import("@/components/home/about.vue"),
    methodology: () => import("@/components/home/methodology.vue"),
    cases: () => import("@/components/home/cases.vue"),
    recentPosts: () => import("@/components/blog/recentPosts.vue"),
    testimonials: () => import("@/components/home/testimonials.vue"),
    clients: () => import("@/components/home/clients.vue"),
    cta: () => import("@/components/home/cta.vue"),
    newsletter: () => import("@/components/home/newsletter.vue")
  },
  computed: {
    ...mapState("slides", ["slides"]),
    ...mapState("cases", ["cases"]),
    ...mapState("posts", ["recent"]),
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
#home {
  width: 100%;
  overflow: hidden;
}
</style>