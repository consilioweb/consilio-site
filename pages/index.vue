<template>
  <div id="home">
    <slides :slides="slides" :length="lengthSlides" />
    <!-- A Consilio -->
    <about :about="about" />
    <!-- Metodologia -->
    <section class="methodology">
      <div class="methodology__title">
        <parallax-element :strength="10" :type="'translate'">
          <h2>metodologia</h2>
        </parallax-element>
      </div>
      <methodology />
      <div class="methodology__button">
        <button-shadow :text="buttonMethodology" />
      </div>
    </section>
    <!-- Cases -->
    <section class="cases">
      <div class="cases__wrapper">
        <div class="cases__title">
          <parallax-element :strength="-15" :type="'translate'">
            <h2>cases</h2>
          </parallax-element>
          <span class="cases__title--bg">portfólio</span>
        </div>
        <cases :cases="cases" :length="lengthCases" />
      </div>
    </section>
    <recent-posts :posts="recent" :length="lengthPosts" />
    <testimonials :testimonials="testimonials" :length="lengthTestimonials" />
    <clients :clients="clients" :length="lengthClients" />
    <!-- Call to action -->
    <section class="cta">
      <div class="shape">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 280 280">
          <path fill="#586371">
            <animate
              repeatCount="indefinite"
              attributeName="d"
              dur="15s"
              values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	"
            />
          </path>
        </svg>
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
      buttonMethodology: "Saiba Mais"
    };
  },
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
.methodology {
  @include inline-flex;
  @include align-items(center);
  @include flex-direction(column);
  @include justify-content(center);
  @include flex-flow(wrap);
  position: relative;
  margin: 10% 5%;
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
    margin: 5% calc(10% + 40px) 5% 10%;
  }
}
.cases {
  margin: 10% 5%;
  @media screen and (min-width: $break-md) {
    margin: 5% calc(10% + 40px) 5% 10%;
  }
  &__wrapper {
    @include inline-flex;
    @include align-items(center);
    @include flex-direction(column);
    @include justify-content(center);
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
  &__title {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-bottom: 30px;
    &--bg {
      position: absolute;
      white-space: nowrap;
      color: $primary;
      opacity: 0.04;
      font-size: 80px;
      font-family: "Montserrat";
      font-weight: 900;
      z-index: -2;
      top: 10px;
      text-align: center;
      @media screen and (min-width: $break-md) {
        font-size: 180px;
        top: -5%;
      }
    }
  }
}
.cta {
  position: relative;
  & .shape {
    position: absolute;
    opacity: 0.04;
    width: 100vw;
    height: auto;
    transform: translate(70%, 0);
    & svg {
      height: 700px;
      width: 700px;
      float: none;
      position: absolute;
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