<template>
  <section class="inner">
    <div class="inner__text-rotate">
      <span>contato</span>
    </div>
    <div class="inner__header">
      <div class="inner__header--title">
        <p>Estamos sempre disponíveis para</p>
        <h1>
          <span class="span-outer">
            <span class="span-inner span-inner--top">perguntas</span>
          </span>
          <span class="span-outer">
            <span class="span-inner span-inner--center">e conversas</span>
          </span>
        </h1>
      </div>
    </div>
    <div class="inner__content">
      <div class="column">
        <h3>Endereço</h3>
        <p v-html="info.address"></p>
      </div>
      <div class="column">
        <h3>Contato</h3>
        <p>
          <b>Telefone:</b>
          <a :href="'tel:'+info.phone" target="_blank" rel="noopener">{{info.phone}}</a>
          <br />
          <b>Celular:</b>
          <a
            :href="'https://api.whatsapp.com/send?1=pt_BR&phone=+55'+info.whatsapp"
            target="_blank"
            rel="noopener"
          >{{info.whatsapp}}</a>
          <br />
          <b>E-mail:</b>
          <a :href="'mailto:'+info.email" target="_blank" rel="noopener">{{info.email}}</a>
        </p>
      </div>
      <div class="column">
        <h3>Social</h3>
        <p>
          <b>Facebook:</b>
          <a
            :href="'https://fb.com/'+info.facebook"
            target="_blank"
            rel="noopener"
          >{{info.facebook}}</a>
          <br />
          <b>Instagram:</b>
          <a
            :href="'https://instagram.com/'+info.instagram"
            target="_blank"
            rel="noopener"
          >{{info.instagram}}</a>
          <br />
          <b>Linkedin:</b>
          <a
            :href="'https://www.linkedin.com/company/'+info.linkedin"
            target="_blank"
            rel="noopener"
          >{{info.linkedin}}</a>
          <br />
          <b>Youtube:</b>
          <a
            :href="'https://www.youtube.com/channel/'+info.youtube"
            target="_blank"
            rel="noopener"
          >{{info.youtube}}</a>
        </p>
      </div>
    </div>

    <div class="section-form">
      <div>
        <h3>Preencha o formulário</h3>
      </div>
      <div class="box shadow">
        <form class="form-contact" ref="form" @submit.prevent="send">
          <div class="form__container">
            <div class="form__input">
              <label>Primeiro nome *</label>
              <input
                type="text"
                v-model="form.firstname"
                name="firstname"
                :class="response ? 'disabled' : ''"
                required
                placeholder
              />
            </div>
          </div>
          <div class="form__container">
            <div class="form__input">
              <label>E-mail *</label>
              <input
                type="email"
                v-model="form.email"
                name="email"
                :class="response ? 'disabled' : ''"
                required
                placeholder
              />
            </div>
          </div>
          <div class="form__container">
            <div class="form__input">
              <label>Telefone *</label>
              <input
                type="tel"
                v-model="form.phone"
                name="phone"
                v-mask="['(##) ####-####', '(##) #####-####']"
                :class="response ? 'disabled' : ''"
                required
                placeholder
              />
            </div>
          </div>
          <div class="form__container">
            <div class="form__input">
              <label>Sobre o que gostaria de falar?*</label>
              <select
                name="subject"
                v-model="form.subject"
                :class="response ? 'disabled' : ''"
                required
              >
                <option value selected="selected">Selecione o assunto</option>
                <option value="Comercial">Comercial</option>
                <option value="Financeiro">Financeiro</option>
                <option value="Falar com consultor">Falar com consultor</option>
                <option value="Diagnóstico gratuito">Diagnóstico gratuito</option>
              </select>
            </div>
          </div>
          <div class="form__container">
            <div class="form__input">
              <label>Sua mensagem *</label>
              <textarea
                v-model="form.message"
                name="message"
                :class="response ? 'disabled' : ''"
                required
              />
            </div>
          </div>
          <div class="form__confirm">
            <div class="form__checkbox">
              <!--
              <input id="privacyInput" type="checkbox" />
              <label for="privacyInput">
                Enviando esse formulário concordo com as
                <a
                  href="https://www.consilio.com/politica-de-privacidade"
                  target="_blank"
                >políticas de privacidade</a> do site.
              </label>
              -->
              <p class="response" v-if="response" v-html="response"></p>
            </div>
            <button
              type="submit"
              :class="[response ? 'disabled' : '', submit.loading ? 'loading' : '', submit.done ? 'done' : '']"
              class="submit"
            >
              <span>
                <svg>
                  <use xlink:href="#circle" />
                </svg>
                <svg>
                  <use xlink:href="#arrow" />
                </svg>
                <svg>
                  <use xlink:href="#check" />
                </svg>
              </span>
              <ul>
                <li>Enviar</li>
                <li>Enviando</li>
                <li>Enviado</li>
              </ul>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
              <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="circle">
                <circle cx="8" cy="8" r="7.5" />
              </symbol>
              <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="arrow">
                <path
                  d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"
                />
                <path
                  d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"
                />
              </symbol>
              <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="check">
                <path
                  id="test"
                  d="M4.76499011,6.7673683 L8.2641848,3.26100386 C8.61147835,2.91299871 9.15190114,2.91299871 9.49919469,3.26100386 C9.51164115,3.27347582 9.52370806,3.28637357 9.53537662,3.29967699 C9.83511755,3.64141434 9.81891834,4.17816549 9.49919469,4.49854425 L5.18121271,8.82537365 C4.94885368,9.05820878 4.58112654,9.05820878 4.34876751,8.82537365 L2.50080531,6.97362503 C2.48835885,6.96115307 2.47629194,6.94825532 2.46462338,6.93495189 C2.16488245,6.59321455 2.18108166,6.0564634 2.50080531,5.73608464 C2.84809886,5.3880795 3.38852165,5.3880795 3.7358152,5.73608464 L4.76499011,6.7673683 Z"
                />
              </symbol>
            </svg>
          </div>
        </form>
      </div>
    </div>
    <div class="section-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15285.305744161913!2d-49.2407029!3d-16.7105563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd32731b85ff140d6!2sAg%C3%AAncia%20Consilio!5e0!3m2!1spt-BR!2sbr!4v1576762019976!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        rel="noopener"
      ></iframe>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      response: "",
      status: "",
      submit: {
        loading: false,
        done: false
      },
      form: {
        firstname: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      }
    };
  },
  computed: {
    ...mapState("core", ["info"])
  },
  methods: {
    test(e) {
      let self = this;
      this.submit.loading = true;
      console.log("Loading " + this.submit.loading);
      setTimeout(function() {
        self.submit.done = true;
        console.log("Done " + self.submit.done);
        setTimeout(function() {
          self.submit.loading = false;
          self.submit.done = false;
          console.log("Loading " + self.submit.loading);
          console.log("Done " + self.submit.done);
        }, 3200);
      }, 2000);
    },
    async send(e) {
      if (typeof window.FormData !== "function") {
        return;
      }
      const formData = new FormData(this.$refs.form);
      try {
        const token = await this.$recaptcha.execute("login");
        console.log("ReCaptcha token:", token);
      } catch (error) {
        console.log("Login error:", error);
      }
      await axios
        .post(
          `${process.env.PROXY_URL}wp-json/contact-form-7/v1/contact-forms/5674565/feedback`,
          formData
        )
        .then(res => {
          let self = this;
          this.submit.loading = true;
          setTimeout(function() {
            e.preventDefault();
            e.target.reset();
            self.submit.done = true;
            setTimeout(function() {
              self.response = res.data.message;
              self.status = res.data.status;

              self.submit.loading = false;
              self.submit.done = false;
            }, 3200);
          }, 2000);
        })
        .catch(error => {
          this.response = "Error: " + error.response;
          console.log("Error --> " + error);
        });
    }
  },
  async mounted() {
    await this.$recaptcha.init();
    this.$store.commit("HOVER_BUTTON_HEADER", false);
    this.$store.commit("LOGO_HEADER_PRIMARY", true);
  },
  head() {
    return {
      title: "Contato | Agência Consilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Possui alguma dúvida? Preencha o formulário em nossa página de contato e tire suas dúvidas com nossa equipe de relacionamento. Conheça as soluções que temos para sua empresa."
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Contato | Agência Consilio"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Contato | Agência Consilio"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Possui alguma dúvida? Preencha o formulário em nossa página de contato e tire suas dúvidas com nossa equipe de relacionamento. Conheça as soluções que temos para sua empresa."
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Contato | Agência Consilio"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Possui alguma dúvida? Preencha o formulário em nossa página de contato e tire suas dúvidas com nossa equipe de relacionamento. Conheça as soluções que temos para sua empresa."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_flexbox.scss";
@import "./assets/scss/_variables.scss";

.inner {
  @include flexbox;
  @include flex-direction(column);
  width: 100%;
  position: relative;
  overflow-x: hidden;
  &__text-rotate {
    position: absolute;
    white-space: nowrap;
    display: inline-block;
    color: $primary;
    opacity: 0.04;
    content: "consilio";
    font-size: 180px;
    font-family: "Montserrat";
    font-weight: 900;
    z-index: -2;
    transform-origin: 50% 50%;
    transform: translate(38%, 10%) rotate(-90deg);
    right: 45%;
    top: 12%;
  }
  &__header {
    margin: 0% 13% 0% 10%;
    height: 620px;
    z-index: 8;
    &--title {
      padding-top: 200px;
      @media screen and (min-width: $break-md) {
        padding-left: 20%;
      }
      p {
        margin: 0;
        font-size: 16px;
        color: $primary;
        text-align: left;
      }
      h1 .span-inner,
      h1 .span-outer {
        height: 60px;
        line-height: 60px;
        width: 100%;
        text-align: left;
      }
      .span-outer {
        display: block;
        position: relative;
        white-space: nowrap;
        opacity: 1;
      }
    }
    &:after {
      background-image: linear-gradient(
        106.7deg,
        rgba(255, 199, 67, 1) 103.7%,
        rgba(255, 247, 200, 1) 120.7%
      );
      width: 50%;
      height: calc(100vh - 330px);
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
    & h1 {
      font-size: 50px;
      font-family: "Montserrat";
      font-weight: 900;
      color: $primary;
      text-align: center;
      line-height: 60px;
      //text-shadow: 4px 4px 9px rgba(46, 61, 98, 0.2);
      @media screen and (min-width: $break-md) {
        font-size: 60px;
        @include flex-direction(row);
      }
    }
  }
  &__content {
    margin: 5% 13% 10% 10%;
    z-index: 8;
    @include flexbox;
    @include flex-direction(column);
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
    }
    b {
      font-weight: 600;
    }
    h3 {
      font-family: Quicksand, sans-serif;
      color: $primary;
      font-weight: 600;
      padding-bottom: 20px;
      padding-top: 30px;
      @media screen and (min-width: $break-md) {
        padding-top: 0px;
      }
    }
    p {
      color: $primary;
      font-size: 13px;
    }
  }
  & .section-map {
    padding-bottom: 100px;
    & iframe {
      border: 0;
      filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 10+ */
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(99%); /* Chrome 19+ & Safari 6+ */
      -webkit-backface-visibility: hidden; /* Fix for transition flickering */
    }
  }
  & .section-form {
    position: relative;
    padding: 50px 5% 10% 0;
    @media screen and (min-width: $break-md) {
      padding: 50px 13% 10% 0;
    }
    & h3 {
      font-size: 40px;
      color: $white;
      left: 10%;
      width: 100%;
      z-index: 1;
      position: absolute;
      margin-top: -40px;
      text-shadow: 8px 6px 13px rgba(0, 0, 0, 0.1);
      @media screen and (min-width: $break-md) {
        font-size: 60px;
        width: 40%;
      }
    }
    & .shadow {
      box-shadow: 30px 22px 27px rgba(0, 0, 0, 0.1);
    }
    & form {
      padding: 10vw 0% 50px 10%;
      @media screen and (min-width: $break-md) {
        padding: 10vw 10% 50px 20%;
      }
    }
    & .box {
      width: 100%;
      background-color: $secondary;
      padding-top: 30px;
      @media screen and (min-width: $break-md) {
        padding-top: 0px;
      }
    }
    & .form__container {
      display: flex;
      flex-wrap: wrap;
    }
    & .form__input {
      width: 100%;
      padding-right: 10%;
      margin-bottom: 15px;
      & label,
      select {
        width: 100%;
      }
      & label {
        font-size: 14px;
        color: $white;
        font-family: Quicksand, sans-serif;
        font-weight: 700;
        padding-bottom: 10px;
        padding-left: 20px;
        line-height: 40px;
      }
      & select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23586371'><polygon points='0,0 100,0 50,50'/></svg>");
        background-size: 0.8em;
        background-repeat: no-repeat;
        background-position: right 20px center;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & input {
        width: 100%;
        box-sizing: border-box;
      }
      & input,
      select {
        padding: 0 20px;
        height: 40px;
        border-radius: 20px;
        background-color: #fff;
        border: none;
        font-size: 13px;
        color: #b3b3b3;
        font-family: Quicksand, sans-serif;
        font-weight: 700;
        box-shadow: 8px 10px 12px rgba(0, 0, 0, 0.1);
      }
      & textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        min-height: 100px;
        border-radius: 20px;
        background-color: #fff;
        border: none;
        font-size: 13px;
        color: #b3b3b3;
        font-family: Quicksand, sans-serif;
        font-weight: 700;
        box-shadow: 8px 10px 12px rgba(0, 0, 0, 0.1);
      }
    }
    & .form__confirm {
      width: 90%;
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      & input {
        width: auto;
        padding: 0;
        height: auto;
      }
    }
    & .form__checkbox {
      & a,
      label {
        font-size: 10px;
        color: #394a59;
        font-family: Quicksand, sans-serif;
        font-weight: 700;
      }
    }
    & .btn {
      border: none;
      background-color: $primary;
      padding: 10px 25px;
      text-decoration: none;
      font-size: 16px;
      font-weight: 700;
      white-space: nowrap;
      border-radius: 20px;
      transition: all 0.5s ease;
      -webkit-transition: all 0.5s ease;
      box-shadow: 8px 10px 12px rgba(0, 0, 0, 0.1);
      color: #fff;
      cursor: pointer;
    }
  }
}
.column {
  flex: 1;
}
.response {
  color: white;
  text-align: center;
  padding: 0 20px;
}
.disabled {
  filter: grayscale(1);
  cursor: not-allowed;
}
$background: $primary;
$success: #3fdc75;

.submit {
  height: 40px;
  align-self: center;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: flex;
  background: $background;
  box-shadow: 0 4px 20px rgba($background, 0.15);
  line-height: 20px;
  padding: 10px;
  border-radius: 22px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.3s ease;
  span {
    display: inline-block;
    vertical-align: top;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    margin: 0 4px 0 0;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background: $background;
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.3s ease, background 0.3s ease;
    }
    svg {
      position: absolute;
      width: 12px;
      height: 12px;
      left: 50%;
      top: 50%;
      margin: -6px 0 0 -6px;
      z-index: 1;
      &:nth-child(1) {
        width: 20px;
        height: 20px;
        top: 0;
        left: 0;
        fill: none;
        margin: 0;
        stroke: #fff;
        stroke-width: 1px;
        stroke-dashoffset: 47.124 * 2;
        stroke-dasharray: 47.124;
      }
      &:nth-child(2) {
        fill: $background;
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      &:nth-child(3) {
        fill: $background;
        transform: translateY(20px);
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 0.3s ease;
      }
    }
  }
  &:hover {
    box-shadow: 0 8px 24px rgba($background, 0.15);
    span {
      svg {
        &:nth-child(2) {
          transform: translateY(-20px);
        }
        &:nth-child(3) {
          transform: translateY(0);
        }
      }
    }
  }
  &:active {
    transform: scale(0.94);
    box-shadow: 0 4px 16px rgba($success, 0.18);
  }
  &.loading {
    span {
      background: none;
      transition: background 0.1s ease 0.3s;
      &:before {
        transform: scale(1);
      }
      svg {
        &:nth-child(1) {
          animation: turn 1.6s linear infinite forwards,
            path 1.6s linear infinite forwards;
        }
        &:nth-child(2) {
          transform: translateY(-20px);
        }
        &:nth-child(3) {
          opacity: 0;
          transform: translateY(0) scale(0.6);
        }
      }
    }
    ul {
      transform: rotateX(120deg);
    }
    &.done {
      background: $success;
      box-shadow: 0 4px 20px rgba($success, 0.15);
      span {
        background: #fff;
        transition: background 0.1s ease 0s;
        &:before {
          background: $success;
          transform: scale(0);
        }
        svg {
          &:nth-child(1) {
            animation: none;
          }
          &:nth-child(3) {
            fill: $success;
            opacity: 1;
            transform: scale(1);
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)
                0.3s,
              opacity 0.4s ease 0.25s;
          }
        }
      }
      ul {
        transform: rotateX(240deg);
      }
    }
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    height: 20px;
    width: 70px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    li {
      --rotateX: 0deg;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      transform-origin: 50% 50%;
      transform: rotateX(var(--rotateX)) translateZ(0px);
      &:nth-child(2) {
        --rotateX: -120deg;
      }
      &:nth-child(3) {
        --rotateX: -240deg;
        font-weight: 600;
      }
    }
  }
}

@keyframes turn {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes path {
  100% {
    stroke-dashoffset: 0;
  }
}
</style>

<router>
  {
    path: '/contact',
    alias: [
      '/contato',
      '/conversar'
    ]
  }
</router>