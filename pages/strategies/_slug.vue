<template>
  <section id="strategy">
    <header class="header">
      <div class="header__container">
        <h1 v-html="strategy.title"></h1>
        <div v-html="strategy.excerpt"></div>
      </div>
    </header>
    <article class="article container__full">
      <div class="article__content">
        <div class="article__content--article" v-html="strategy.content"></div>
      </div>
    </article>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  validate({ params }) {
    if (params.slug) {
      return isNaN(+params.slug);
    }
  },
  async fetch({ store, params }) {
    const slug = params.slug;
    await store.dispatch("strategies/getStrategy", {
      slug: slug
    });
  },
  computed: {
    ...mapState("strategies", ["strategy"]),
    readingTime() {
      let words = this.strategy.content.split(" ").length + 1;
      return `${Math.ceil(words / 150)} min. de leitura`;
    },
    urlStrategy() {
      return process.env.BASE_URL + "estrategias/" + this.strategy.slug;
    },
    thumbnail_default() {
      return this.$store.state.core.info.thumbnail_default;
    }
  },
  mounted() {
    this.$store.commit("HOVER_BUTTON_HEADER", true);
    this.$store.commit("LOGO_HEADER_WHITE", true);
  },
  head() {
    return {
      title:
        this.$options.filters.stripped(this.strategy.title) +
        ` | Agência Consilio`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.strategy.excerpt
            ? this.$options.filters.stripped(this.strategy.excerpt)
            : this.toLimitChars(
                this.$options.filters.stripped(this.strategy.content),
                160
              )
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content:
            this.$options.filters.stripped(this.strategy.title) +
            ` | Agência Consilio`
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            this.$options.filters.stripped(this.strategy.title) +
            ` | Agência Consilio`
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.strategy.excerpt
            ? this.$options.filters.stripped(this.strategy.excerpt)
            : this.toLimitChars(
                this.$options.filters.stripped(this.strategy.content),
                160
              )
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            this.$options.filters.stripped(this.strategy.title) +
            ` | Agência Consilio`
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.strategy.excerpt
            ? this.$options.filters.stripped(this.strategy.excerpt)
            : this.toLimitChars(
                this.$options.filters.stripped(this.strategy.content),
                160
              )
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  .header {
    &__container {
      @include flexbox;
      @include align-items(center);
      @include justify-content(center);
      @include flex-direction(column);
      min-height: 400px;
      margin: 2% 3%;
      font-weight: bold;
      font-size: 50px;
      color: $white;
      text-align: center;
      padding: 30px;
      background: #536976;
      background: -webkit-linear-gradient(to left, #292e49, #536976);
      background: linear-gradient(to left, #292e49, #536976);

      & p {
        text-align: center;
        padding: 20px 0;
        color: $white;
      }
      @media screen and (min-width: $break-md) {
        margin: 2% calc(4% + #{$distance_sb}) 5% 4%;
        padding: 20px 200px 0px 200px;
      }
    }
  }
}
article {
  @include flexbox;
  @include flex-direction(column);
  background: $white;
  flex: 1;
  transition: all 1s ease-in-out;
  position: relative;
  z-index: 999;
  margin-top: -100px;
  @media screen and (min-width: $break-md) {
    margin-top: -150px;
  }
  & .article__content {
    @include flexbox();
    padding: 20px 30px 50px;
    @media screen and (min-width: $break-md) {
      padding: 60px 50px 50px 50px;
    }
    &--article {
      p {
        font-size: 13px;
        color: $primary;
      }
    }
  }
}
</style>


<router>
  {
    path: '/estrategias/:slug?'
  }
</router>