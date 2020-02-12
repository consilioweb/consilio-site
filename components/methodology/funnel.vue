<template>
  <div class="funnel">
    <div class="step step-first">
      <div class="funnel-desc funnel-desc--left">
        <h4>Atração</h4>
        <p>Utilização das técnicas de Inbound Marketing através de conteúdos de engajamento considerados relevantes para os usuários.</p>
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
          <path id="curve" d="M40,180c0-60.751,49.248-110,110-110c60.751,0,110,49.249,110,110" />
        </defs>
        <text fill="white">
          <textPath xlink:href="#curve" text-anchor="middle" startOffset="50%">1º Atração</textPath>
        </text>
      </svg>
      <svg-icon class="funnel-bg" name="step-funnel" />
    </div>
    <div class="step step-second">
      <div class="funnel-desc funnel-desc--right">
        <h4>Conversão</h4>
        <p>Uso das ferramentas de captura e calls to action para colher as informações dos usuários e torná-los leads da empresa.</p>
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
          <path id="curve" d="M40,180c0-60.751,49.248-110,110-110c60.751,0,110,49.249,110,110" />
        </defs>
        <text fill="white">
          <textPath xlink:href="#curve" text-anchor="middle" startOffset="50%">2º Conversão</textPath>
        </text>
      </svg>
      <svg-icon class="funnel-bg" name="step-funnel" />
    </div>
    <div class="step step-third">
      <div class="funnel-desc funnel-desc--left">
        <h4>Nutrição</h4>
        <p>Impactar os leads com conteúdos segmentados e relevantes de acordo com a etapa de funil que cada um está, fazendo com que eles percorram toda a jornada.</p>
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
          <path id="curve" d="M40,180c0-60.751,49.248-110,110-110c60.751,0,110,49.249,110,110" />
        </defs>
        <text fill="white">
          <textPath xlink:href="#curve" text-anchor="middle" startOffset="50%">3º Nutrição</textPath>
        </text>
      </svg>
      <svg-icon class="funnel-bg" name="step-funnel" />
    </div>
    <div class="step step-fourth">
      <div class="funnel-desc funnel-desc--right">
        <h4>Oportunidades</h4>
        <p>Revisar, explicar e mensurar cada etapa. Além de adotar ações para que o cliente se fidelize a empresa.</p>
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
          <textPath xlink:href="#curve" text-anchor="middle" startOffset="50%">4º Oportunidades</textPath>
        </text>
      </svg>
      <svg-icon class="funnel-bg" name="step-funnel" />
    </div>
  </div>
</template>
<script>
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
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/scss/_flexbox.scss";
@import "./assets/scss/_variables.scss";

.funnel {
  @include flexbox;
  @include flex-direction(column);
  @include align-items(center);
  & .funnel-desc {
    transition: all 0.5s ease-in-out;
    @media screen and (max-width: $break-md) {
      height: 0;
      opacity: 0;
    }
    @media screen and (min-width: $break-md) {
      position: absolute;
      width: 300px;
      margin-top: -100px;
    }
    &--left {
      right: 350px;
    }
    &--right {
      left: 350px;
      @media screen and (min-width: $break-md) {
        text-align: right;
      }
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
      @media screen and (min-width: $break-md) {
        @include flexbox;
        content: "";
        border-bottom: 1px $secondary dotted;
        margin-top: 15px;
        width: 125%;
      }
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
      @include justify-content(center);
      @media screen and (min-width: $break-md) {
        @include justify-content(initial);
      }
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
    @include flexbox;
    z-index: 1;
    transform: scale(2.1);
    font-size: 7px;
    font-weight: 600;
    top: -37px;
    position: absolute;
    @media screen and (min-width: $break-md) {
      top: -25px;
    }
  }
  & .funnel-bg {
    height: 96px;
  }
  & .step {
    @include flexbox;
    @include flex-direction(column-reverse);
    text-align: center;
    @media screen and (max-width: $break-md) {
      overflow: hidden;
    }
    @media screen and (min-width: $break-md) {
      margin-top: 20px;
    }
    &:hover .funnel-desc {
      @media screen and (max-width: $break-md) {
        height: auto;
        opacity: 1;
        padding-bottom: 20px;
      }
    }
    @media screen and (min-width: $break-md) {
      display: initial;
      text-align: initial;
    }
  }
  & .step-first {
    position: relative;
    & .funnel-bg {
      fill: #94b0bf;
      @media screen and (min-width: $break-md) {
        transform: scale(1.2);
      }
    }
  }
  & .step-second {
    position: relative;
    & .funnel-bg {
      fill: #b1cbdc;
      transform: scale(0.9);
      @media screen and (min-width: $break-md) {
        transform: scale(1.1);
      }
    }
  }
  & .step-third {
    position: relative;
    & .funnel-bg {
      fill: #7892a2;
      transform: scale(0.8);
      @media screen and (min-width: $break-md) {
        transform: scale(1);
      }
    }
  }
  & .step-fourth {
    position: relative;
    & .funnel-bg {
      fill: #4f6a7a;
      transform: scale(0.7);
      @media screen and (min-width: $break-md) {
        transform: scale(0.9);
      }
    }
  }
}
</style>