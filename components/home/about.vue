<template>
  <div class="about">
    <div class="about__bg">
      <span>agência</span>
    </div>
    <div class="about__img">
      <div class="about__img--overlay">
        <span>
          <svg-icon name="logo"></svg-icon>
        </span>
      </div>
      <client-only>
        <div class="background-video-container">
          <iframe
            src="https://player.vimeo.com/video/389239456?autoplay=1&loop=1&title=0&byline=0&controls=0&background=1&muted=0"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </client-only>
    </div>
    <div class="about__text">
      <div class="about__text--title">
        <parallax-element :strength="-10" :type="'translate'">
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
  </div>
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
  @include inline-flex;
  @include align-items(center);
  @include flex-direction(column);
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
  }
}
.about__text {
  @include align-items(center);
  @include justify-content(center);
  margin: 10% 0 0 0;
  @media screen and (min-width: $break-md) {
    margin: 0 0 0 10%;
  }
}
.about__text--title h2 {
  text-align: center;
  margin-bottom: 20px;
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
  position: relative;
  @media screen and (min-width: $break-md) {
    min-width: 54%;
    width: 500px;
  }
  &--overlay {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: absolute;
    span {
      @include flexbox;
      @include align-items(flex-end);
      @include justify-content(center);
      height: 100%;
      position: relative;
      @keyframes animate {
        0% {
          opacity: 0;
          transform: translateX(-100px);
        }
        80% {
          transform: translateX(10px);
        }
        100% {
          opacity: 1;
          transform: translate(0);
        }
      }
      & .icon {
        width: 120px;
        height: 80px;
        color: $white;
        animation: animate 3s ease;
        transform-origin: center top;
        -webkit-filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3));
        filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3));
      }
    }
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
  font-size: 130px;
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
  margin: 30px 0 0 0;
  @media screen and (min-width: $break-md) {
    @include justify-content(left);
  }
}

.background-video-container {
  overflow: hidden;
}
iframe {
  height: 450px;
  width: 160%;
  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}
</style>