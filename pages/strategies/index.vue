<template>
  <section id="strategies">
    <header class="header">
      <div class="header__container">
        <h1>Tenha</h1>
        <div id="flip">
          <div>
            <div>estratégias</div>
          </div>
          <div>
            <div>strategies</div>
          </div>
          <div>
            <div>strategien</div>
          </div>
        </div>
        <h1>bem definidas!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fugiat veritatis aliquid, officiis architecto rem, quam deserunt, iste minima quae debitis ad facere non blanditiis. Nesciunt voluptatem ipsum voluptatum beatae?</p>
      </div>
    </header>
    <div class="container__full stategies">
      <div v-for="(strategy,index) in strategies" :key="index" class="card__white">
        <div class="strategy">
          <div class="strategy--text">
            <img
              src="https://images.unsplash.com/photo-1528150113746-eedf29a184c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=418cfe031d636ba13d884ecb0f791291&auto=format&fit=crop&w=3334&q=80"
              alt
            />
            <h1>{{strategy.title}}</h1>
            <span v-html="strategy.excerpt"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="container__full partners">
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
      <div class="title">
        <h2>envolvidos</h2>
        <span class="title--bg">parceiros</span>
      </div>
      <div class="content">
        <div class="content__box">
          <img src="~/assets/img/partners/iclips.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/amazonses.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/googlepartner.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/facebookpartner.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/configr.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/laravel.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/mautic.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/nodejs.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/rockcontent.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/vuejs.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/nuxtjs.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/pwa.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/hubspot.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/wordpress.png" />
        </div>
        <div class="content__box">
          <img src="~/assets/img/partners/gocache.png" />
        </div>
      </div>

      <p
        class="footer"
      >Acima você conhecerá as tecnologias e parceiros que estão sendo utilizados, requisitados, que participam ou se envolvem com os projetos de nossos clientes.</p>
    </div>
    <cta
      title="Marketing Digital inteligente e feito por quem respira comunicação digital."
      textButton="DIAGNÓSTICO GRATUITO"
      urlButton="diagnostico-gratuito"
    />
  </section>
</template>

<script>
import { mapState } from "vuex";
import api from "@/api/index";

export default {
  data() {
    return {
      estrategias: []
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("strategies/getStrategies", params);
  },
  components: {
    cta: () => import("@/components/home/cta.vue")
  },
  computed: {
    ...mapState("strategies", ["strategies"])
  },
  mounted() {
    this.$store.commit("HOVER_BUTTON_HEADER", true);
    this.$store.commit("LOGO_HEADER_WHITE", true);
  },
  head() {
    return {
      title: "Estratégias de Marketing Digital | Agência Consilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "O blog da Consilio é comprometido com seu desenvolvimento. Aqui você acompanha notícias, dicas e encontra os melhores artigos sobre Marketing Digital, redes sociais, geração de Leads, vendas, email marketing e muito mais. Acesse e confira!"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Estratégias de Marketing Digital | Agência Consilio"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Estratégias de Marketing Digital | Agência Consilio"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "O blog da Consilio é comprometido com seu desenvolvimento. Aqui você acompanha notícias, dicas e encontra os melhores artigos sobre Marketing Digital, redes sociais, geração de Leads, vendas, email marketing e muito mais. Acesse e confira!"
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Estratégias de Marketing Digital | Agência Consilio"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "O estratégia da Consilio é comprometido com seu desenvolvimento. Aqui você acompanha notícias, dicas e encontra os melhores artigos sobre Marketing Digital, redes sociais, geração de Leads, vendas, email marketing e muito mais. Acesse e confira!"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section#strategies {
  @include flexbox;
  @include flex-direction(column);
  width: 100%;
  overflow: hidden;
}
header {
  .header {
    &__container {
      @include flexbox;
      @include align-items(center);
      @include justify-content(center);
      @include flex-direction(column);
      min-height: 600px;
      margin: 2% 3%;
      font-weight: bold;
      font-size: 50px;
      color: $white;
      text-align: center;
      padding: 30px;
      & #flip {
        height: 70px;
        overflow: hidden;
        text-align: center;
      }
      & #flip > div > div {
        color: #fff;
        padding: 4px;
        height: 45px;
        margin-bottom: 45px;
        display: inline-flex;
      }

      & #flip div:first-child {
        animation: show 10s linear infinite;
      }

      & #flip div div {
        background: $secondary;
      }
      & #flip div:first-child div {
        background: $yellow;
      }
      & #flip div:last-child div {
        background: $secondary;
      }

      @keyframes show {
        0% {
          margin-top: -270px;
        }
        5% {
          margin-top: -180px;
        }
        33% {
          margin-top: -180px;
        }
        38% {
          margin-top: -90px;
        }
        66% {
          margin-top: -90px;
        }
        71% {
          margin-top: 0px;
        }
        99.99% {
          margin-top: 0px;
        }
        100% {
          margin-top: -270px;
        }
      }
      & p {
        text-align: center;
        padding: 20px 0;
        color: $white;
      }
      @media screen and (min-width: $break-md) {
        margin: 2% calc(4% + #{$distance_sb}) 5% 4%;
        padding: 0 200px;
      }
      background: #536976;
      background: -webkit-linear-gradient(to left, #292e49, #536976);
      background: linear-gradient(to left, #292e49, #536976);
    }
  }
}
.stategies {
  @include flexbox;
  @include flex-flow(row wrap);
  margin-top: -80px;
  @media screen and (min-width: $break-md) {
    margin-top: -150px;
  }
  & .card__white {
    font-size: 13px;
    margin: 0 1rem 1rem 0;
    flex: 1;
    position: relative;
    display: inline-flex;
    max-height: 300px;
    overflow: hidden;
    min-width: 100%;
    transition: 0.7s all cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    &:nth-child(6n) {
      min-width: 100%;
    }
    &:nth-child(7n) {
      min-width: 50%;
    }
    @media screen and (min-width: $break-md) {
      min-width: calc(100% / 4);
    }
    & h1 {
      font-family: Quicksand, sans-serif;
      color: $white;
      font-size: 22px;
      font-weight: 500;
      position: absolute;
      bottom: 20px;
      left: 20px;
      text-shadow: 1px 1px 10px rgba(46, 61, 98, 0.6);
    }
    & .strategy {
      @include flexbox;
      & img {
        width: 150%;
        margin: -25% -25%;
        min-height: 100%;
        transition: 0.7s all cubic-bezier(0.785, 0.135, 0.15, 0.86);
      }
      &--text {
      }
    }
    span {
      font-family: Quicksand, sans-serif;
      position: absolute;
      bottom: -20px;
      left: 20px;
      color: rgba(255, 255, 255, 0);
      transition: 0.8s all cubic-bezier(0.785, 0.135, 0.15, 0.86);
      text-align: left;
      padding: 0 20px 0 0px;
      text-shadow: 1px 1px 10px rgba(46, 61, 98, 0.6);

      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      z-index: -1;
    }
    &:before {
      content: "";
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      width: 50px;
      height: 400px;
      transform: rotate(30deg);
      top: -40px;
      left: -200px;
      transition: 1s all cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.07);
      -webkit-box-shadow: 0px 0px 50px -1px rgba(46, 61, 98, 0.14);
      -moz-box-shadow: 0px 0px 50px -1px rgba(46, 61, 98, 0.14);
      box-shadow: 0px 0px 50px -1px rgba(46, 61, 98, 0.14);
      z-index: 99;
      transition: 1s all cubic-bezier(0.785, 0.135, 0.15, 0.86);
      &:after {
        content: "";
        position: absolute;
        background: rgba($primary, 0.8);
        width: 100%;
        height: 100%;
        transition: 1s all cubic-bezier(0.785, 0.135, 0.15, 0.86);
        z-index: 1;
      }

      &:before {
        content: "";
        left: 130%;
      }

      img {
        width: 100%;
        margin: 0;
        min-height: 100%;
      }
      span {
        color: rgba(255, 255, 255, 1);
        bottom: 20px;
        z-index: 10;
      }
    }
  }
}
.partners {
  text-align: center;
  & h2 {
    @include justify-content(center);
  }
  & p {
    color: $secondary;
  }
  & .title {
    position: relative;
    &--bg {
      position: absolute;
      white-space: nowrap;
      color: #586371;
      opacity: 0.04;
      font-family: "Montserrat";
      font-weight: 900;
      z-index: -2;
      top: -60px;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 65px;
      @media screen and (min-width: $break-md) {
        font-size: 100px;
      }
    }
  }
  & .content {
    @include flexbox;
    @include flex-flow(row wrap);
    padding-top: 20px;
    &__box {
      @include flex(1);
      padding: 20px 20px;
      transition: all 0.5s ease-in-out;
      & img {
        filter: gray;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
        transition: all 0.5s ease-in-out;
        &:hover {
          filter: none;
        }
      }
      &:hover {
        border-radius: 10px;
        box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.15);
      }
    }
  }
  & .footer {
    padding: 5%;
    @media screen and (min-width: $break-md) {
      padding: 30px 20% 0px 20%;
    }
  }
}
.shape {
  position: absolute;
  opacity: 0.04;
  left: -40%;
  top: 70%;
  transform: translate(-40%, 0);
}
.shape svg {
  height: 700px;
  width: 700px;
  float: none;
  position: absolute;
}
</style>

<router>
  {
    path: '/strategies',
    alias: [
      '/estrategias',
      '/servicos',
      '/produtos'
    ]
  }
</router>