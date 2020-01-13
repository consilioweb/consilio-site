<template>
  <section class="newsletter">
    <div class="newsletter__container">
      <div class="newsletter__title">
        <parallax-element :strength="5" :type="'translate'">
          <h2>
            Receba
            <br />novidades
          </h2>
        </parallax-element>
      </div>
      <div class="newsletter__content">
        <div class="card">
          <div class="card__content">
            <p>Cadastre-se e receba as últimas novidades da agência consilio</p>
            <form ref="form" @submit.prevent="send">
              <div style="display:none;">
                <input
                  type="hidden"
                  name="mauticform[formId]"
                  id="mauticform_newsletter_id"
                  value="8"
                />
                <input
                  type="hidden"
                  name="mauticform[return]"
                  id="mauticform_newsletter_return"
                  value
                />
                <input
                  type="hidden"
                  name="mauticform[formName]"
                  id="mauticform_newsletter_name"
                  value="newsletter"
                />
              </div>
              <div class="input-wrapper">
                <label for="email">E-mail:</label>
                <input
                  v-model="form.email"
                  aria-label="email"
                  id="email"
                  name="mauticform[email]"
                  type="text"
                  placeholder="Endereço de e-mail"
                />
                <button
                  type="submit"
                  :class="[response ? 'disabled' : '', submit.loading ? 'loading' : '', submit.done ? 'done' : '']"
                  class="submit"
                  aria-label="enviar"
                >
                  <ul>
                    <li>ASSINAR</li>
                    <li>ASSINANDO</li>
                    <li>ASSINADO</li>
                  </ul>
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
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="circle">
                    <circle cx="8" cy="8" r="7.5" />
                  </symbol>
                  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 12 14" id="arrow">
                    <path
                      fill-rule="evenodd"
                      d="M7.252,5.407 L2.147,8.541 C1.988,8.639 1.804,8.688 1.619,8.688 C1.466,8.688 1.313,8.655 1.173,8.587 C0.864,8.437 0.671,8.144 0.671,7.824 L0.671,1.553 C0.671,1.235 0.864,0.940 1.173,0.791 C1.482,0.640 1.857,0.658 2.147,0.836 L7.252,3.971 C7.514,4.132 7.671,4.401 7.671,4.688 C7.671,4.976 7.514,5.246 7.252,5.407 Z"
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
              <p class="response" v-if="response">{{status}}: {{response}}</p>
            </form>
          </div>
        </div>
        <span class="newsletter--bg">news</span>
      </div>
    </div>
  </section>
</template>

<script>
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
        email: ""
      }
    };
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
      await axios
        .post(
          "https://automacao.consilio.com.br/form/submit?formId=8",
          formData,
          {
            headers: {
              "Access-Control-Allow-Origin": `${process.env.BASE_URL}`,
              "Access-Control-Allow-Methods": "GET,POST",
              "Content-Type": "multipart/form-data"
            }
          }
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
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  text-align: -webkit-center;
}
.newsletter {
  position: relative;
  &--bg {
    position: absolute;
    white-space: nowrap;
    color: $primary;
    opacity: 0.04;
    font-size: 80px;
    font-family: "Montserrat";
    font-weight: 900;
    z-index: -2;
    bottom: -30px;
    @media screen and (min-width: $break-md) {
      font-size: 180px;
      bottom: -100px;
    }
  }
  &__container {
    margin: 5%;
    @include flexbox;
    @include align-items(center);
    @include flex-direction(column);
    @media screen and (min-width: $break-md) {
      margin: 10% 13% 10% 10%;
    }
  }
  &__title {
    @include flexbox;
    @include justify-content(center);
    @include flex-direction(column);
    @include align-items(center);
    width: 100%;
    z-index: 2;
    & h2 {
      text-align: center;
    }
    & span {
      color: $primary;
      opacity: 0.3;
      font-size: 14px;
      font-family: Quicksand;
      font-weight: 600;
    }
  }
  &__content {
    @include flexbox;
    @include justify-content(center);
    padding-bottom: 30px;
    position: relative;
    margin: 1.5%;
    flex: 1;
    width: 100%;
    top: -70px;
    & .card {
      width: 100%;
      background: $white;
      -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
      -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
      box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
      padding: 60px 20px 40px 30px;
      transition: all 1s ease;
      position: relative;
      @media screen and (min-width: $break-md) {
        padding: 60px 40px 40px 50px;
      }
      &__content {
        position: relative;
        @include flexbox;
        @include align-items(center);
        @include flex-direction(column);
        & p {
          flex: 1;
          color: $primary;
          opacity: 0.5;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
  &__footer {
    @include flexbox;
    @include justify-content(center);
    @include flex-direction(column);
    width: 100%;
    padding-top: 20px;
  }
}
.input-wrapper {
  @include flexbox;
  box-sizing: border-box;
  flex-flow: row nowrap;
  padding-left: 20px;
  margin-top: 10px;
  height: auto;
  border: 1px solid #eaeaea;
  border-radius: 35px;
  flex: 1;
  width: 100%;
  @media screen and (min-width: $break-md) {
    width: 50%;
  }

  & > input,
  & > button {
    box-sizing: border-box;
    height: 100%;
    border: none;
    outline: none;
  }

  & > input {
    flex: 1 1 auto;
    border-right: 0;
    border-radius: 0;
    height: auto;
    position: relative;
    background: transparent;
  }
  $success: #3fdc75;
  & > button {
    display: flex;
    margin: 2px;
    transform: scale(1);
    background: $secondary;
    line-height: 20px;
    padding: 12px;
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
      margin: 0 4px 0 15px;
      position: relative;
      overflow: hidden;
      &:before {
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background: $secondary;
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
          fill: $secondary;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        &:nth-child(3) {
          fill: $secondary;
          transform: translateY(20px);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            opacity 0.3s ease;
        }
      }
    }
    &:hover {
      box-shadow: 0 8px 24px rgba($secondary, 0.15);
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
        transform: rotateX(90deg);
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
          transform: rotateX(180deg);
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
        transform: rotateX(var(--rotateX)) translateZ(10px);
        &:nth-child(2) {
          --rotateX: -90deg;
        }
        &:nth-child(3) {
          --rotateX: -180deg;
        }
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
.response {
  color: white;
  text-align: center;
  padding: 20px 20px 0px 20px;
  font-size: 13px;
}
.disabled {
  filter: grayscale(1);
  cursor: not-allowed;
}

label {
  position: absolute;
  height: 1px;
  width: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  border: 0;
  overflow: hidden;
}
</style>