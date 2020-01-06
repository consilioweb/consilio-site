<template>
  <section class="about">
    <div class="about__bg">
      <span>agência</span>
    </div>
    <div class="about__img">
      <client-only>
        <img src="@/assets/img/about-img.png" class="lazyload" alt="Por que a Consilio?" />
      </client-only>
    </div>
    <div class="about__text">
      <div class="about__text--title">
        <parallax-element :parallaxStrength="-10" :type="'translation'">
          <h2>{{about.title}}</h2>
        </parallax-element>
      </div>
      <div class="about__text--content">
        <span v-html="about.excerpt"></span>
      </div>
      <div class="about__text--button">
        <button-shadow :text="textButton" :url="'a-consilio'" />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonShadow from "@/components/button-shadow";
export default {
  name: "About",
  props: ["about"],
  components: {
    ButtonShadow
  },
  data() {
    return {
      textButton: "Saiba Mais"
    };
  }
};
</script>

<style lang="scss" scoped>
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
.about__text--content {
  color: $primary;
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
  margin: 30px 0;
  @media screen and (min-width: $break-md) {
    @include justify-content(left);
  }
}
</style>