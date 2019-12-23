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
        <p>
          <br />Concept Office - Av. do Comércio
          <br />25 - Sala 502
          <br />Vila Maria Jose
        </p>
      </div>
      <div class="column">
        <h3>Contato</h3>
        <p>
          <br />
          <b>Telefone:</b>
          <a href="tel:6231007916">(62) 3100-7916</a>
          <br />
          <b>Celular:</b> (62) 99659-0375
          <br />
          <b>E-mail:</b>
          <a href="mailto:#">contato@consilio.com.br</a>
        </p>
      </div>
      <div class="column">
        <h3>Social</h3>
        <p>
          <br />
          <b>Facebook:</b>
          <a href="#">@agenciaconsilio</a>
          <br />
          <b>Instagram:</b>
          <a href="#">@agenciaconsilio</a>
          <br />
          <b>Linkedin:</b>
          <a href="#">@agenciaconsilio</a>
          <br />
          <b>Youtube:</b>
          <a href="#">@agenciaconsilio</a>
        </p>
      </div>
    </div>

    <div class="section-form">
      <div>
        <h3>Preencha o formulário</h3>
      </div>
      <div class="box shadow">
        <form>
          <div class="form__container">
            <div class="form__input">
              <label>Primeiro nome *</label>
              <input type="text" name="firstname" placeholder />
            </div>
          </div>
          <div class="form__container">
            <div class="form__input">
              <label>E-mail *</label>
              <input type="email" name="email" placeholder />
            </div>
          </div>
          <div class="form__container">
            <div class="form__input">
              <label>Telefone *</label>
              <input type="text" name="phone" placeholder />
            </div>
          </div>
          <div class="form__container">
            <div class="form__input">
              <label>Sobre o que gostaria de falar?*</label>
              <select>
                <option name="subject" value selected="selected">Selecione o assunto</option>
                <option value="comercial">Comercial</option>
                <option value="negozio">Financeiro</option>
                <option value="azienda">Falar com consultor</option>
                <option value="azienda">Diagnóstico gratuito</option>
              </select>
            </div>
          </div>
          <div class="form__container">
            <div class="form__input">
              <label>Sua mensagem *</label>
              <textarea name="message" />
            </div>
          </div>
          <div class="form__confirm">
            <div class="form__checkbox">
              <input id="privacyInput" type="checkbox" />
              <label for="privacyInput">
                Enviando esse formulário concordo com as
                <a
                  href="https://www.consilio.com/politica-de-privacidade"
                  target="_blank"
                >políticas de privacidade</a> do site.
              </label>
            </div>
            <button type="submit" class="btn">Enviar</button>
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
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("HOVER_BUTTON_HEADER", false);
    this.$store.commit("LOGO_HEADER_PRIMARY", true);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_flexbox.scss";

.inner {
  @include flexbox;
  @include flex-direction(column);
  width: 100%;
  position: relative;
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