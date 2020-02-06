<template>
  <div id="home">
    <slides :slides="slides" :length="lengthSlides" />
    <!-- A Consilio -->
    <section class="about container__full">
      <about :about="about" />
    </section>
    <!-- Metodologia -->
    <section class="methodology container__full">
      <div class="methodology__wrapper">
        <div class="methodology__title">
          <parallax-element :strength="10" :type="'translate'">
            <h2>metodologia</h2>
          </parallax-element>
        </div>
        <methodology />
        <div class="methodology__button">
          <button-shadow :text="buttonMethodology" :url="urlMethodology" />
        </div>
      </div>
    </section>
    <!-- Cases -->
    <section class="cases">
      <div class="cases__wrapper">
        <div class="cases__container container__full">
          <div class="cases__title">
            <parallax-element :strength="-15" :type="'translate'">
              <h2>cases</h2>
            </parallax-element>
            <span class="cases__title--bg">portfólio</span>
          </div>
          <cases :cases="cases" :length="lengthCases" />
        </div>
      </div>
    </section>
    <!-- Postagens recentes -->
    <section class="recent-posts container__full">
      <recent-posts :posts="recent" :length="lengthPosts" />
    </section>
    <!-- Depoimentos -->
    <section class="testimonials">
      <div class="testimonials__wrapper container__full">
        <div class="testimonials__title">
          <parallax-element :strength="5" :type="'translate'">
            <h2>depoimentos</h2>
          </parallax-element>
        </div>
        <testimonials
          :testimonials="testimonials"
          :length="lengthTestimonials"
          class="container__full"
        />
      </div>
    </section>
    <!-- Clientes -->
    <section class="clients">
      <clients :clients="clients" :length="lengthClients" class="container__full" />
    </section>
    <!-- Call to action -->
    <section class="cta container__full">
      <div class="shape">
        <svg-icon name="shape" />
      </div>
      <cta
        title="Marketing Digital inteligente e feito por quem respira comunicação digital."
        textButton="DIAGNÓSTICO GRATUITO"
        urlButton="diagnostico-gratuito"
      />
    </section>
    <newsletter />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      buttonMethodology: "Saiba Mais",
      urlMethodology: "metodologia"
    };
  },
  mounted() {
    this.$store.commit("LOGO_HEADER_PRIMARY");
    this.$store.commit("HOVER_BUTTON_HEADER", false);
  },
  components: {
    slides: () => import("@/components/home/slides.vue"),
    about: () => import("@/components/home/about.vue"),
    methodology: () => import("@/components/home/methodology.vue"),
    cases: () => import("@/components/home/cases.vue"),
    RecentPosts: () => import("@/components/blog/recent-posts.vue"),
    testimonials: () => import("@/components/home/testimonials.vue"),
    clients: () => import("@/components/home/clients.vue"),
    cta: () => import("@/components/home/cta.vue"),
    newsletter: () => import("@/components/home/newsletter.vue"),
    ButtonShadow: () => import("@/components/button-shadow")
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
.about {
  @include inline-flex;
}
.methodology {
  @include inline-flex;
  &__wrapper {
    @include inline-flex;
    @include align-items(center);
    @include flex-direction(column);
    @include justify-content(center);
    @include flex-flow(wrap);
    position: relative;
  }
}
.cases {
  @include inline-flex;
  width: 100%;
  &__wrapper {
    @include inline-flex;
    @include align-items(center);
    @include flex-direction(column);
    @include justify-content(center);
    width: 100%;
  }
  &__container {
    position: relative;
  }
  &__title {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-bottom: 50px;
    &--bg {
      position: absolute;
      white-space: nowrap;
      color: $primary;
      opacity: 0.04;
      font-size: 80px;
      font-family: "Montserrat";
      font-weight: 900;
      z-index: -2;
      text-align: center;
      @media screen and (min-width: $break-md) {
        font-size: 130px;
      }
    }
  }
}
.testimonials {
  &__title {
    @include flexbox;
    @include justify-content(center);
    padding-bottom: 10px;
  }
}
.clients {
  width: 100%;
  display: inline-block;
}
.recent-posts {
  @include inline-flex;
}
.cta {
  @include inline-flex;
  position: relative;
  & .shape {
    position: absolute;
    opacity: 0.02;
    top: -70%;
    left: 80%;
    & svg {
      height: 600px;
      width: 600px;
    }
  }
}
</style>

<router>
  {
    path: '/',
    alias: [
      '/diagnostico-gratuito'
    ]
  }
</router>