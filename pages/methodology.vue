<template>
  <div class="methodology">
    <header class="header">
      <div class="header__container container__full">
        <div class="header__container--text-bg">
          <span>metodologia</span>
        </div>
        <div class="header__container--text">
          <h1>Nossa Metodologia</h1>
        </div>
        <div class="header__container--asset">
          <div class="perspective">
            <span class="render">i</span>
            <span class="render shadow">-</span>
          </div>
        </div>
      </div>
    </header>

    <section class="first">
      <div class="first__container container__full">
        <div class="first__container--title">
          <h2>
            <span>Sua empresa está pronta para entender o que é marketing digital de verdade?</span>
          </h2>
        </div>
        <div class="first__container--subtitle">
          <p>Nossos especialistas desenvolveram uma metodologia que contempla 4 pilares para uma gestão de marketing digital voltada a resultados reais.</p>
        </div>
        <div class="first__container--methodology">
          <methodology />
        </div>
        <div class="first__container--footer">
          <p>Todos os dias surgem inúmeras técnicas e “receitas de bolo” que prometem resultados rápidos e descomplicados vindo das mídias digitais. Se você assim como nós, não acredita em fórmulas que formam milionários da noite para o dia, essa metodologia pode te ajudar...</p>
        </div>
      </div>
    </section>
    <section class="second">
      <div class="second__container container__full">
        <div class="second__container--title">
          <h2>como a consilio irá trabalhar as suas redes sociais</h2>
        </div>
        <div class="second__container--content">
          <div class="media_social card__white">
            <svg-icon name="icons/loupe" />
            <p>Pesquisa e análise da presença da marca nos meios digitais</p>
          </div>
          <div class="media_social card__white">
            <svg-icon name="icons/social-media" />
            <p>Criação/adequação de contas próprias nas redes sociais</p>
          </div>
          <div class="media_social card__white">
            <svg-icon name="icons/vector" />
            <p>Criação de peças gráficas para postagens</p>
          </div>
          <div class="media_social card__white">
            <svg-icon name="icons/professions-and-jobs" />
            <p>Conteúdos com técnica atuais de copywrite</p>
          </div>
          <div class="media_social card__white">
            <svg-icon name="icons/metrics" />
            <p>Monitoramento social e assuntos inerentes</p>
          </div>
          <div class="media_social card__white">
            <svg-icon name="icons/photo" />
            <p>Atualização de materiais fotográficos</p>
          </div>
        </div>
      </div>
    </section>
    <section class="third">
      <div class="third__container container__full">
        <div class="third__container--title">
          <h2>Como planejamos fazer as suas campanhas no meio digital</h2>
        </div>
        <div class="third__container--content">
          <div class="campaign card__white">
            <svg-icon name="icons/chart-pie" />
            <h3>Análise de métricas</h3>
            <p>A avaliação periódica de impressão, CPC (custo por clique), CPA (custo por aquisição), CTR (taxa de clique), taxa de conversão e outros.</p>
          </div>
          <div class="campaign card__white">
            <svg-icon name="icons/target" />
            <h3>Definição de objetivos e kpi’s das campanhas</h3>
            <p>KPI’s nada mais são que as métricas que usamos para medir a performance dos anúncios. Sendo essas métricas definidas de acordo com os objetivos.</p>
          </div>
          <div class="campaign card__white">
            <svg-icon name="icons/home-page" />
            <h3>Landing Page</h3>
            <p>Para termos uma maior controle dos investimentos mídia, utilizamos páginas de conversão como parâmetros de conversão.</p>
          </div>
          <div class="campaign card__white">
            <svg-icon name="icons/layers" />
            <h3>Criação e configuração de anúncios para as mídias</h3>
            <p>Peças gráficas, conteúdo em texto e extensões de anúncios.</p>
          </div>
          <div class="campaign card__white">
            <svg-icon name="icons/magnet" />
            <h3>Acompanhamento</h3>
            <p>Acompanhamos diariamente o desempenhos dos anúncios que estarão em veículos, a fim de dar segurança e tranquilidade que o investimento está sendo bem direcionado.</p>
          </div>
          <div class="campaign card__white">
            <svg-icon name="icons/speedometer" />
            <h3>Relatórios periódicos</h3>
            <p>A avaliação periódica de impressão, CPC (custo por clique), CPA (custo por aquisição), CTR (taxa de clique), taxa de conversão e outros.</p>
          </div>
        </div>
        <div class="third__container--footer">
          <h4>Quanto devo investir em anúncios e quais mídias?</h4>
          <p>Após o fechamento de contrato e a de dos objetivos faremos uma análise para de um “investimento ótimo” a ser aplicado em cada mídia. Levaremos em consideração os objetivos a serem cumpridos e a disposição financeira passada previamente no briefing.</p>
        </div>
      </div>
    </section>
    <section class="fourth">
      <div class="fourth__container container__full">
        <div class="fourth__container--title card__white">
          <h2>Quais as estratégias na construção de seu website</h2>
        </div>
        <div class="fourth__container--content">
          <p>Hoje, muitas pessoas/empresas acham que os websites servem apenas como uma vitrine para que os internautas vejam o que ali está exposto. De fato ele serve para isso, mas não só isso. A verdade é que os websites são umas das ações primordiais quando se fala marketing digital.</p>
          <p>Se deseja aumentar confiança, ter maior exposição e se tornar autoridade, você precisa de um website. Com a utilização e algumas técnicas e estratégias, o seu website se tornará um excelente canal de geração de negócios. Conheça nossas atividades técnicas e estratégicas que cumprimos corretamente na construção:</p>
        </div>
        <div class="fourth__container--footer">
          <h4>
            <span>Técnicas e estratégias</span>
          </h4>
          <div class="strategies-site">
            <client-only>
              <carousel ref="carousel" v-bind="carouselOptions">
                <div class="strategy card__white">
                  <div class="strategy__icon">
                    <svg-icon name="icons/vector" />
                  </div>
                  <div class="strategy__text">
                    <h4>Criação website responsivo</h4>
                    <p>Responsividade é aquele site que a tela se adapta automaticamente tantos nos computadores como também nos dispositivos mobiles.</p>
                  </div>
                </div>
                <div class="strategy card__white">
                  <div class="strategy__icon">
                    <svg-icon name="icons/vector" />
                  </div>
                  <div class="strategy__text">
                    <h4>Criação website responsivo</h4>
                    <p>Responsividade é aquele site que a tela se adapta automaticamente tantos nos computadores como também nos dispositivos mobiles.</p>
                  </div>
                </div>
                <div class="strategy card__white">
                  <div class="strategy__icon">
                    <svg-icon name="icons/vector" />
                  </div>
                  <div class="strategy__text">
                    <h4>Criação website responsivo</h4>
                    <p>Responsividade é aquele site que a tela se adapta automaticamente tantos nos computadores como também nos dispositivos mobiles.</p>
                  </div>
                </div>
              </carousel>
              <ul
                class="controls strategies-site__controls"
                id="strategies-site-dots"
                aria-label="Navegação do carousel"
                tabindex="0"
              >
                <li @click="prev" class="prev" data-controls="prev">
                  <svg-icon name="icons/left-arrow" />
                </li>
                <li @click="next" class="next" data-controls="next">
                  <svg-icon name="icons/right-arrow" />
                </li>
              </ul>
            </client-only>
          </div>
        </div>
      </div>
    </section>
    <section class="fifth">
      <div class="fifth__container container__full">
        <div class="fifth__container--title">
          <h2>Automação de Marketing</h2>
          <h3>
            <span>O que é a automação de Marketing?</span>
          </h3>
          <p>Uma automação de marketing nada mais é que um software que permite de maneira programável, escalável e personalizada criar um ecossistema de relacionamentos com um cliente ou potencial cliente. Compreendendo a jornada de compra do seu cliente é possível promover ações decisivas que irão dar ao seu potencial cliente a tranquilidade de um bom negócio.</p>
          <h3>
            <span>O que ela pode te oferecer?</span>
          </h3>
        </div>
        <div class="fifth__container--content">
          <div class="collapse">
            <input type="checkbox" id="block-1" />
            <label class="card__white" for="block-1">
              Gerenciar Leads
              <svg-icon name="icons/down-chevron" />
            </label>
            <div class="content">
              <p>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae, cupiditate rerum tenetur ullam placeat, aspernatur sapiente animi ad doloremque! Iure eius laudantium dolores voluptatum facilis blanditiis voluptates, aspernatur numquam.</p>
            </div>
          </div>
          <div class="collapse">
            <input type="checkbox" id="block-2" />
            <label class="card__white" for="block-2">
              Integração como CRM
              <svg-icon name="icons/down-chevron" />
            </label>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae, cupiditate rerum tenetur ullam placeat, aspernatur sapiente animi ad doloremque! Iure eius laudantium dolores voluptatum facilis blanditiis voluptates, aspernatur numquam.</p>
            </div>
          </div>
          <div class="collapse">
            <input type="checkbox" id="block-3" />
            <label class="card__white" for="block-3">
              Campanhas
              <svg-icon name="icons/down-chevron" />
            </label>
            <div class="content">
              <p>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae, cupiditate rerum tenetur ullam placeat, aspernatur sapiente animi ad doloremque! Iure eius laudantium dolores voluptatum facilis blanditiis voluptates, aspernatur numquam.</p>
            </div>
          </div>
          <div class="collapse">
            <input type="checkbox" id="block-4" />
            <label class="card__white" for="block-4">
              Lead Scoring
              <svg-icon name="icons/down-chevron" />
            </label>
            <div class="content">
              <p>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae, cupiditate rerum tenetur ullam placeat, aspernatur sapiente animi ad doloremque! Iure eius laudantium dolores voluptatum facilis blanditiis voluptates, aspernatur numquam.</p>
            </div>
          </div>
          <div class="collapse">
            <input type="checkbox" id="block-5" />
            <label class="card__white" for="block-5">
              Lead Tracking
              <svg-icon name="icons/down-chevron" />
            </label>
            <div class="content">
              <p>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae, cupiditate rerum tenetur ullam placeat, aspernatur sapiente animi ad doloremque! Iure eius laudantium dolores voluptatum facilis blanditiis voluptates, aspernatur numquam.</p>
            </div>
          </div>
          <div class="collapse">
            <input type="checkbox" id="block-6" />
            <label class="card__white" for="block-6">
              Personalizar campos e criar formulários
              <svg-icon name="icons/down-chevron" />
            </label>
            <div class="content">
              <p>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae, cupiditate rerum tenetur ullam placeat, aspernatur sapiente animi ad doloremque! Iure eius laudantium dolores voluptatum facilis blanditiis voluptates, aspernatur numquam.</p>
            </div>
          </div>
          <div class="collapse">
            <input type="checkbox" id="block-7" />
            <label class="card__white" for="block-7">
              Jornada do Cliente
              <svg-icon name="icons/down-chevron" />
            </label>
            <div class="content">
              <p>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae, cupiditate rerum tenetur ullam placeat, aspernatur sapiente animi ad doloremque! Iure eius laudantium dolores voluptatum facilis blanditiis voluptates, aspernatur numquam.</p>
            </div>
          </div>
          <div class="collapse">
            <input type="checkbox" id="block-8" />
            <label class="card__white" for="block-8">
              Disparo de E-mail Marketing / SMS
              <svg-icon name="icons/down-chevron" />
            </label>
            <div class="content">
              <p>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae, cupiditate rerum tenetur ullam placeat, aspernatur sapiente animi ad doloremque! Iure eius laudantium dolores voluptatum facilis blanditiis voluptates, aspernatur numquam.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sixth">
      <div class="sixth__container container__full">
        <div class="sixth__container--title">
          <h2>Como a consilio vai realmente impactar seus resultados</h2>
        </div>
        <div class="sixth__container--content">
          <div class="step-first">
            <div class="funnel-desc funnel-desc--left">
              <h4>Atração</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat in incidunt ipsum.</p>
              <ul>
                <li data-tooltip="Facebook">
                  <svg-icon name="icons/facebook" />
                </li>
                <li data-tooltip="Instagram">
                  <svg-icon name="icons/instagram" />
                </li>
                <li data-tooltip="Linkedin">
                  <svg-icon name="icons/linkedin" />
                </li>
                <li data-tooltip="Google">
                  <svg-icon name="icons/adwords" />
                </li>
                <li data-tooltip="Blog">
                  <svg-icon name="icons/rss" />
                </li>
              </ul>
            </div>
            <svg class="funnel-title" viewBox="0 0 300 140">
              <defs>
                <path
                  id="curve"
                  d="M40,180c0-60.751,49.248-110,110-110c60.751,0,110,49.249,110,110"
                />
              </defs>
              <text fill="white">
                <textPath xlink:href="#curve" text-anchor="middle" startOffset="50%">1º Atração</textPath>
              </text>
            </svg>
            <svg-icon class="funnel-bg" name="step-funnel" />
          </div>
          <div class="step-second">
            <div class="funnel-desc funnel-desc--right">
              <h4>Conversão</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat in incidunt ipsum.</p>
              <ul>
                <li data-tooltip="Formulários">
                  <format-line-style-icon :size="16" />
                </li>
                <li data-tooltip="Chatbot">
                  <forum-icon :size="16" />
                </li>
                <li data-tooltip="WhatsApp">
                  <svg-icon name="icons/whatsapp" />
                </li>
                <li data-tooltip="Landing Page">
                  <monitor-screenshot-icon :size="16" />
                </li>
              </ul>
            </div>
            <svg class="funnel-title" viewBox="0 0 300 140">
              <defs>
                <path
                  id="curve"
                  d="M40,180c0-60.751,49.248-110,110-110c60.751,0,110,49.249,110,110"
                />
              </defs>
              <text fill="white">
                <textPath xlink:href="#curve" text-anchor="middle" startOffset="50%">2º Conversão</textPath>
              </text>
            </svg>
            <svg-icon class="funnel-bg" name="step-funnel" />
          </div>
          <div class="step-third">
            <div class="funnel-desc funnel-desc--left">
              <h4>Nutrição</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat in incidunt ipsum.</p>
              <ul>
                <li data-tooltip="Conteúdos de valor">
                  <playlist-star-icon :size="16" />
                </li>
                <li data-tooltip="Remarketing">
                  <refresh-icon :size="16" />
                </li>
                <li data-tooltip="Focus (Pop-up interno)">
                  <flag-icon :size="16" />
                </li>
                <li data-tooltip="Lead scoring (pontuação)">
                  <finance-icon :size="16" />
                </li>
              </ul>
            </div>
            <svg class="funnel-title" viewBox="0 0 300 140">
              <defs>
                <path
                  id="curve"
                  d="M40,180c0-60.751,49.248-110,110-110c60.751,0,110,49.249,110,110"
                />
              </defs>
              <text fill="white">
                <textPath xlink:href="#curve" text-anchor="middle" startOffset="50%">3º Nutrição</textPath>
              </text>
            </svg>
            <svg-icon class="funnel-bg" name="step-funnel" />
          </div>
          <div class="step-fourth">
            <div class="funnel-desc funnel-desc--right">
              <h4>Oportunidades</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat in incidunt ipsum.</p>
              <ul>
                <li data-tooltip="CRM">
                  <account-plus-icon :size="16" />
                </li>
                <li data-tooltip="Follow-up">
                  <handshake-icon :size="16" />
                </li>
                <li data-tooltip="Treinamento">
                  <human-male-male-icon :size="16" />
                </li>
              </ul>
            </div>
            <svg class="funnel-title" viewBox="0 0 300 140">
              <defs>
                <path id="curve" d="M100,200 Q300,78 563,89 Q924,100 1044,199" />
              </defs>
              <text fill="white">
                <textPath
                  xlink:href="#curve"
                  text-anchor="middle"
                  startOffset="50%"
                >4º Oportunidades</textPath>
              </text>
            </svg>
            <svg-icon class="funnel-bg" name="step-funnel" />
          </div>
        </div>
        <div class="sixth__container--footer">
          <h3>
            <span>Métricas</span>
          </h3>
          <p>
            Uma automação de marketing nada mais é que um software que permite de maneira programável,
            escalável e personalizada criar um ecossistema de relacionamentos com um cliente ou potencial cliente.
            Compreendendo a jornada de compra do seu cliente é possível promover ações decisivas.
          </p>
        </div>
      </div>
      <newsletter />
    </section>
  </div>
</template>

<script>
import methodology from "@/components/home/methodology.vue";
import newsletter from "@/components/home/newsletter.vue";
import ForumIcon from "vue-material-design-icons/Forum.vue";
import FormatLineStyleIcon from "vue-material-design-icons/FormatLineStyle.vue";
import MonitorScreenshotIcon from "vue-material-design-icons/MonitorScreenshot.vue";
import PlaylistStarIcon from "vue-material-design-icons/PlaylistStar.vue";
import RefreshIcon from "vue-material-design-icons/Refresh.vue";
import FlagIcon from "vue-material-design-icons/Flag.vue";
import FinanceIcon from "vue-material-design-icons/Finance.vue";
import AccountPlusIcon from "vue-material-design-icons/AccountPlus.vue";
import HandshakeIcon from "vue-material-design-icons/Handshake.vue";
import HumanMaleMaleIcon from "vue-material-design-icons/HumanMaleMale.vue";
export default {
  components: {
    methodology,
    newsletter,
    ForumIcon,
    FormatLineStyleIcon,
    MonitorScreenshotIcon,
    PlaylistStarIcon,
    RefreshIcon,
    FlagIcon,
    FinanceIcon,
    AccountPlusIcon,
    HandshakeIcon,
    HumanMaleMaleIcon
  },
  data: () => ({
    carouselOptions: {
      lazyload: true,
      lazyloadSelector: ".lazyload",
      loop: false,
      controls: false,
      autoplay: false,
      items: 1,
      mouseDrag: true,
      autoplayHoverPause: true,
      center: true,
      nav: false,
      autoplayButtonOutput: false,
      arrowKeys: true,
      controlsContainer: "#strategies-site-dots",
      speed: 2000,
      autoplayTimeout: 4000
      //rewind: true
    }
  }),
  methods: {
    prev: function(event) {
      this.$refs.carousel.slider.goTo("prev");
    },
    next: function(event) {
      this.$refs.carousel.slider.goTo("next");
    }
  },
  mounted() {
    this.$store.commit("HOVER_BUTTON_HEADER", false);
    this.$store.commit("LOGO_HEADER_PRIMARY", false);
  }
};
</script>

<style lang="scss" scoped>
.methodology {
}
.header {
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  &__container {
    @include flexbox;
    @include align-items(center);
    min-height: 85vh;
    & h1 {
      color: $primary;
      @media screen and (min-width: $break-md) {
        font-size: 50px;
      }
      @media screen and (min-width: $break-xl) {
        font-size: 60px;
      }
    }
    &--text-bg {
      position: absolute;
      white-space: nowrap;
      display: inline-block;
      color: $primary;
      opacity: 0.04;
      font-size: 130px;
      font-family: "Montserrat";
      font-weight: 900;
      z-index: -2;
      transform-origin: 50% 50%;
      transform: translate(38%, 10%) rotate(-90deg);
      right: 45%;
      top: 35%;
      @media screen and (min-width: $break-sm) {
        right: 45%;
        top: 35%;
      }
      @media screen and (min-width: $break-md) {
        right: 45%;
        top: 35%;
      }
    }
    &--text {
      width: 45%;
      z-index: 9;
    }
    &--asset {
      position: relative;
      flex: 1;
    }
  }

  &::after {
    background-image: radial-gradient(
      circle farthest-corner at 10%,
      at 20%,
      #7691a1 0,
      #586371 90.1%
    );
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      #7691a1 0,
      #586371 90.1%
    );
    width: 50%;
    height: 100%;
    content: "";
    position: absolute;
    top: -15%;
    right: 0;
    z-index: -1;
  }
}
.first {
  @include inline-flex;
  overflow: hidden;
  position: relative;
  &__container {
    &--title,
    &--subtitle,
    &--footer {
      text-align: center;
      padding: 0;
      @media screen and (min-width: $break-md) {
        padding: 0 60px;
      }
    }
    &--subtitle,
    &--footer {
      color: rgba($primary, 0.8);
      padding: 0;
      @media screen and (min-width: $break-md) {
        padding: 0 150px;
      }
    }
    &--title,
    &--subtitle {
      padding-bottom: 30px;
    }
    &--title {
      & h2 {
        display: initial;
        span {
          width: calc(100%);
          background-image: linear-gradient(
            transparent calc(100% - 10px),
            rgba(88, 99, 113, 0.08) 10px
          );
          background-repeat: no-repeat;
          background-size: 100% 90%;
          transition: background-size 1s;
        }
      }
    }
  }
}
.second {
  @include inline-flex;
  &__container {
    &--title {
      text-align: center;
      padding: 0 0 30px 0;
      @media screen and (min-width: $break-md) {
        padding: 0 60px 50px 60px;
      }
    }
    &--content {
      @include flexbox;
      @include flex-flow(wrap);
      & .media_social {
        @include flexbox;
        @include align-items(center);
        flex-basis: 35%;
        flex-grow: 1;
        margin: 0 0.5rem 1rem 0.5rem;
        padding: 30px;
        & svg {
          width: 32px;
          height: 32px;
          color: $secondary;
          fill: $secondary;
          padding-right: 20px;
        }
        & p {
          color: rgba($primary, 0.8);
          line-height: 18px;
        }
        &:hover {
          background: $secondary;
          & svg {
            color: $white;
            fill: $white;
          }
          & p {
            color: rgba($white, 0.9);
          }
        }
      }
    }
  }
}
.third {
  @include inline-flex;
  &__container {
    &--title {
      text-align: center;
      padding: 0 0 30px 0;
      @media screen and (min-width: $break-md) {
        padding: 0 60px 50px 60px;
      }
    }
    &--content {
      @include flexbox;
      @include flex-direction(row);
      @include flex-flow(wrap);
      & .campaign {
        @include flexbox;
        @include flex-direction(column);
        @include justify-content(center);
        flex-basis: 100%;
        flex-grow: 1;
        margin: 0 0.5rem 1rem 0.5rem;
        padding: 30px 45px 40px 45px;
        @media screen and (min-width: $break-md) {
          flex-basis: 18%;
        }
        & svg {
          width: 48px;
          height: 48px;
          padding-bottom: 15px;
          fill: $secondary;
        }
        & h3 {
          font-family: Quicksand, sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding-bottom: 15px;
          color: $primary;
        }
        & p {
          color: rgba($primary, 0.8);
        }
        &:hover {
          background: $secondary;
          & svg {
            color: $white;
            fill: $white;
          }
          & h3 {
            color: $white;
          }
          & p {
            color: rgba($white, 0.9);
          }
        }
      }
    }
    &--footer {
      text-align: center;
      padding: 0;
      @media screen and (min-width: $break-md) {
        padding: 30px 150px;
      }
      & h4 {
        font-family: Quicksand, sans-serif;
        color: rgba($primary, 0.8);
        padding: 20px 0;
      }
      & p {
        color: rgba($primary, 0.8);
      }
    }
  }
}
.fourth {
  position: relative;
  overflow: hidden;
  &__container {
    &--title {
      position: relative;
      text-align: center;
      h2 {
        top: -30px;
        position: relative;
        padding-bottom: 30px;
      }
    }
    &--content {
      flex: 1;
      text-align: justify;
      padding: 50px 0;
      @media screen and (min-width: $break-md) {
        @include flexbox;
      }
      & p {
        padding: 0 0 20px 0;
        color: rgba($primary, 0.8);
        @media screen and (min-width: $break-md) {
          padding: 0 20px 0 0;
        }
      }
      & p:last-child {
        padding: 0;
        @media screen and (min-width: $break-md) {
          padding: 0 0 0 20px;
        }
      }
    }
    &--footer {
      position: relative;
      text-align: center;
      & h4 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        color: $primary;
        display: initial;
        font-size: 28px;
        span {
          width: calc(100%);
          background-image: linear-gradient(
            transparent calc(100% - 10px),
            rgba(88, 99, 113, 0.08) 10px
          );
          background-repeat: no-repeat;
          background-size: 100% 95%;
          transition: background-size 1s;
        }
      }
      & .strategies-site {
        text-align: left;
        margin: 30px auto;
        @media screen and (min-width: $break-md) {
          width: 60%;
          margin: 30px auto;
        }
        &__controls {
          position: absolute;
          bottom: -30px;
          right: 0;
          left: 0;
          @media screen and (min-width: $break-md) {
            top: 0;
            right: 0;
            left: inherit;
            bottom: inherit;
          }
          & .prev,
          & .next {
            bottom: 0px;
            @media screen and (min-width: $break-md) {
              top: inherit;
            }
            position: absolute;
            margin: 0;
            padding: 0;
            border-radius: 50%;
            cursor: pointer;
            line-height: 0px;
            text-align: center;
            z-index: 9999;
            outline: none;
            & svg {
              width: 25px;
              height: 25px;
              display: flex;
              cursor: pointer;
              opacity: 0.6;
              transition: all 0.3s ease;
              fill: #bcbfc7;
              &:hover {
                fill: $secondary !important;
                opacity: 1;
              }
            }
            &:hover {
              background: transparent;
              color: #fff;
              outline: none;
            }
            &:active {
              outline: none;
            }
          }
          & .prev {
            right: 53%;
            opacity: 1;
            @media screen and (min-width: $break-md) {
              right: 60px;
            }
          }
          & .next {
            left: 53%;
            margin-left: auto;
            text-indent: 2px;
            @media screen and (min-width: $break-md) {
              right: 20px;
              left: inherit;
            }
          }
        }
        & .tns-slider {
          @include flexbox;
        }
        & .tns-slide-active {
          opacity: 1 !important;
        }
        & .strategy {
          @include flexbox;
          @include align-items(center);
          padding: 40px 50px;
          margin: 20px;
          opacity: 0.6;
          &__icon {
            & svg {
              fill: $secondary;
              width: 70px;
              height: 70px;
            }
          }
          &__text {
            padding-left: 20px;
            & h4 {
              font-size: 16px;
            }
            & p {
              padding-top: 15px;
              color: rgba($primary, 0.8);
            }
          }
        }
      }
    }
  }
}
.fifth {
  @include inline-flex;
  position: relative;
  &__container {
    &--title {
      @include flexbox;
      @include flex-direction(column);
      @include align-items(center);
      text-align: center;
      padding: 0 0 30px 0;
      @media screen and (min-width: $break-md) {
        padding: 0 60px 50px 60px;
      }
      & h2 {
        margin-bottom: 30px;
      }
      & h3 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        color: $primary;
        display: initial;
        font-size: 28px;
        margin-bottom: 20px;
        span {
          width: calc(100%);
          background-image: linear-gradient(
            transparent calc(100% - 10px),
            rgba(88, 99, 113, 0.08) 10px
          );
          background-repeat: no-repeat;
          background-size: 100% 95%;
          transition: background-size 1s;
        }
      }
      & p {
        text-align: center;
        color: rgba($primary, 0.8);
        margin-bottom: 30px;
      }
    }
    &--content {
      @include flexbox;
      @include flex-flow(wrap row);
      .collapse:nth-child(2n) {
        @media screen and (min-width: $break-md) {
          margin-right: 0;
        }
      }
      .collapse {
        margin: 0 1em;
        @media screen and (min-width: $break-md) {
          min-width: 40%;
          flex: 1;
        }
        input,
        .content {
          opacity: 0;
          height: 0;
          overflow: hidden;
          color: rgba($primary, 0.8);
          transition: all 1s ease-in-out;
          & p {
            padding: 20px;
          }
        }
        label {
          @include flexbox;
          @include align-items(center);
          margin: 2px 0;
          padding: 20px;
          color: $primary;
          font-size: 14px;
          position: relative;
          cursor: pointer;
          & svg {
            width: 15px;
            height: 15px;
            right: 20px;
            position: absolute;
            fill: $secondary;
            transition: all 0.5s ease-in-out;
          }
        }
        input:checked {
          & ~ .content {
            opacity: 1;
            height: auto;
            transition: all 0.5s ease-in-out;
          }
          & ~ label {
            box-shadow: 0px 0px 35px -1px rgba(46, 61, 98, 0.3);
            & svg {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }
}
.sixth {
  @include inline-flex;
  @include flex-direction(column);
  position: relative;
  width: 100%;
  overflow: hidden;
  &__container {
    &--title {
      text-align: center;
      padding: 0 0 30px 0;
      @media screen and (min-width: $break-md) {
        padding: 0 60px 50px 60px;
      }
    }
    &--content {
      @include flexbox;
      @include flex-direction(column);
      @include align-items(center);
      margin: 50px 0 0 0;
      & .funnel-desc {
        position: absolute;
        width: 315px;
        margin-top: -50px;
        &--left {
          right: 350px;
        }
        &--right {
          left: 350px;
          text-align: right;
          & ul {
            @include flex-direction(row-reverse);
            & li {
              margin: 0 0.25em 0 0.25em;
            }
            & li:first-child {
              margin: 0 0 0 0.25em !important;
            }
            & li:last-child {
              margin: 0 0.25em 0 0 !important;
            }
          }
          &::after {
            margin-left: -25%;
          }
        }
        &::after {
          @include flexbox;
          content: "";
          border-bottom: 1px $secondary dotted;
          margin-top: 15px;
          width: 125%;
        }
        & h4 {
          color: $primary;
          font-family: "Quicksand", sans-serif;
          font-weight: 600;
          font-size: 18px;
          padding-bottom: 10px;
        }
        & p {
          color: rgba($primary, 0.8);
          padding-bottom: 10px;
        }
        & ul {
          @include flexbox;
          & li {
            @include align-items(center);
            @include justify-content(center);
            background: #fff;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            padding: 10px;
            margin: 0 0.25em 0 0.25em;
            box-shadow: 0px 5px 15px -1px rgba(46, 61, 98, 0.1);
            cursor: pointer;
            &:hover {
              box-shadow: 0px 5px 25px -1px rgba(46, 61, 98, 0.3);
            }
          }
          & li:first-child {
            margin: 0 0.25em 0 0;
          }
          & li:last-child {
            margin: 0 0 0 0.25em;
          }
        }
        & svg,
        & .material-design-icon svg,
        & .material-design-icon {
          fill: rgba($primary, 0.6);
          color: rgba($primary, 0.6);
          width: 16px;
          height: 16px;
        }
      }
      & .funnel-title {
        position: absolute;
        z-index: 1;
        width: 100%;
        transform: scale(2.1);
        font-size: 7px;
        font-weight: 600;
      }
      & .step-first {
        position: relative;
        & .funnel-bg {
          fill: #94b0bf;
          transform: scale(1.2);
        }
      }
      & .step-second {
        position: relative;
        margin-top: -50px;
        & .funnel-bg {
          fill: #b1cbdc;
          transform: scale(1.1);
        }
      }
      & .step-third {
        position: relative;
        margin-top: -60px;
        & .funnel-bg {
          fill: #7892a2;
          transform: scale(1);
        }
      }
      & .step-fourth {
        position: relative;
        margin-top: -65px;
        & .funnel-bg {
          fill: #4f6a7a;
          transform: scale(0.9);
        }
      }
    }
    &--footer {
      text-align: center;
      padding: 0;
      @media screen and (min-width: $break-md) {
        padding: 30px 150px;
      }
      & h3 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        color: $primary;
        display: initial;
        font-size: 28px;
        display: initial;
        span {
          width: calc(100%);
          background-image: linear-gradient(
            transparent calc(100% - 10px),
            rgba(88, 99, 113, 0.08) 10px
          );
          background-repeat: no-repeat;
          background-size: 100% 90%;
          transition: background-size 1s;
        }
      }
      & p {
        margin-top: 25px;
        color: rgba($primary, 0.8);
      }
    }
  }
}

/**
 * Perspective symbol consilio
 */
.perspective {
  opacity: 1;
  align-self: center;
  width: 100px;
  -moz-perspective: 900px;
  -webkit-perspective: 900px;
  perspective: 900px;
  margin: 0 auto;
  z-index: 5;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  transform: scale(1);
}
.render {
  display: inline-block;
  z-index: 0;
  left: 40px;
  position: relative;
  line-height: 0.55em;
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  font-family: "GothamPro", sans-serif;
  font-size: 32em;
  font-style: italic;
  font-weight: 700;
  transform: rotate(-180deg) rotateY(30deg);
  color: #f5f5f5;
  animation: reflect 2s infinite alternate ease-in-out;
  text-shadow: white 0.006em 0.006em 1px, rgba(0, 0, 0, 0.15) -3px 7px 10px,
    #d0d0d0 -1px 1px 1px, #d0d0d0 -2px 1px 1px, #d0d0d0 -3px 1px 1px,
    #d0d0d0 -4px 1px 1px, #d0d0d0 -5px 1px 1px, #d0d0d0 -6px 1px 1px,
    #d0d0d0 -7px 1px 1px, #d0d0d0 -8px 1px 1px, #d0d0d0 -9px 1px 1px,
    #d0d0d0 -10px 1px 1px, #d0d0d0 -11px 1px 1px, #d0d0d0 -12px 1px 1px,
    rgba(255, 255, 255, 0.6) -5px 2px 100px;
}
@keyframes reflect {
  0% {
    transform: rotate(-180deg) rotateY(30deg);
  }
  100% {
    transform: rotate(-180deg) rotateY(0deg);
  }
}
.render.reflect {
  z-index: 0;
  opacity: 0.4;
  -moz-transform: rotateX(180deg) rotateY(-30deg);
  -webkit-transform: rotateX(180deg) rotateY(-30deg);
  transform: rotateX(180deg) rotateY(-30deg);
}
.render.shadow {
  opacity: 0.3;
  z-index: -1;
  color: transparent;
  letter-spacing: -0.02em;
  position: absolute;
  top: 0.46em;
  left: 0em;
  -moz-transform-origin: 0 0 50%;
  -ms-transform-origin: 0 0 50%;
  -webkit-transform-origin: 0 0 50%;
  transform-origin: 0 0 50%;
  -moz-transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  -webkit-transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  text-shadow: rgba(0, 0, 0, 0.8) 0 0 30px, rgba(0, 0, 0, 0.8) 0 0 80px,
    black 0 0 150px, black 0 0 150px, black 0 0 250px, black 0 0 250px,
    white -0.15em 0.4em 250px;
}
</style>

<router>
  {
    path: '/methodology',
    alias: [
      '/metodologia',
    ]
  }
</router>