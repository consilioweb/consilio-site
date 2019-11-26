<template>
  <section class="about">
    <div class="about__bg">
      <span>agência</span>
    </div>
    <div class="about__img">
      <img src="@/assets/img/about-img.png" />
    </div>
    <div class="about__text">
      <div class="about__text--title">
        <parallax-element :parallaxStrength="-10" :type="'translation'">
          <h2>Por que a consilio?</h2>
        </parallax-element>
      </div>
      <div class="about__text--content">
        <p>A Agência Consilio conta com um time multidisciplinar focado em construir pontes entre o marketing digital e seus resultados. Acreditamos intensamente que ações isoladas, sem um objetivo estratégico, não surtirão efeitos. Como, por exemplo, usar apenas Google Ads, redes sociais, ou site.</p>
        <p>Através dos incansáveis estudos da nossa equipe em busca de soluções efetivas, nós criamos uma metodologia com a finalidade de elaborar ações do marketing digital para a sua empresa. Somos especializados em estratégias digitais, associando tecnologia e relacionamento com um único objetivo: resultados reais.</p>
      </div>
      <div class="about__text--button">
        <button-shadow :title="buttonShadow" />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonShadow from "@/components/button-shadow";
export default {
  components: {
    ButtonShadow
  },
  data() {
    return {
      buttonShadow: "Saiba Mais"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";

.about {
  position: relative;
  margin: 5%;
  @include flexbox;
  @include align-items(center);
  @include flex-direction(column);
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
    margin: 10% 13% 10% 10%;
  }
}
.about__text {
  @include align-items(center);
  @include justify-content(center);
  margin: 10% 0% 10% 0;
  @media screen and (min-width: $break-md) {
    margin: 0 0 0 10%;
  }
}
.about__text--title h2 {
  text-align: center;
  @media screen and (min-width: $break-sm) {
    text-align: center;
  }
  @media screen and (min-width: $break-md) {
    text-align: left;
  }
}
.about__text--content p {
  color: $tertiary;
  padding: 10px 0;
  text-align: justify;
}
.about__img {
  min-width: 100%;
  @media screen and (min-width: $break-md) {
    min-width: 52%;
  }
}
.about__img img {
  width: 100%;
  height: auto;
  -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
}
.about__bg {
  position: absolute;
  white-space: nowrap;
  color: $primary;
  opacity: 0.04;
  content: "consilio";
  font-size: 180px;
  font-family: "Montserrat";
  font-weight: 900;
  z-index: -2;
  transform-origin: 50% 50%;
  transform: translate(38%, 10%) rotate(-90deg);
  right: 48%;
  top: 35%;
  @media screen and (min-width: $break-md) {
    right: 100%;
    top: 30%;
  }
}
.about__text--button {
  @include flexbox;
  @include justify-content(center);
  margin: 20px 0;
  @media screen and (min-width: $break-md) {
    @include justify-content(left);
  }
}
</style>