<template>
  <section>
    <div id="slides">
      <div class="slides">
        <div class="slides__text-rotate">
          <span>consilio</span>
        </div>
        <transition-group
          name="slide"
          mode="out__in"
          enter-class="slide__in"
          leave-class="slide__out"
          enter-active-class="animated slide__in__active"
          leave-active-class="animated slide__out__active"
        >
          <div
            @mouseover="isPaused = true"
            @mouseleave="isPaused = false"
            class="slide__content"
            v-for="(slide, index) in slides"
            v-if="index === current"
            :key="slide.id"
          >
            <parallax-element
              class="slide__title"
              style="z-index: 20;"
              :strength="10"
              :type="'translate'"
            >
              <h1>{{ slide.title }}</h1>
              <button-shadow
                :text="slide.custom_fields['texto_do_botao']"
                :url="slide.custom_fields['url_do_botao']"
              />
            </parallax-element>
            <parallax-element
              class="slide__img"
              style="z-index: 19;"
              :strength="-10"
              :type="'translate'"
            >
              <div v-if="slide.content" v-html="slide.content"></div>
              <div v-else>
                <client-only>
                  <img v-lazy="slide.img" v-if="slide.img != ''" :alt="slide.title" />
                </client-only>
              </div>
            </parallax-element>
          </div>
        </transition-group>
        <div class="controls__slides">
          <button
            aria-label="Anterior"
            role="button"
            aria-hidden="true"
            class="prev"
            @click="incrementSlide(-1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 48.52 48.52"
            >
              <circle
                :style="current == secondLast ? 'stroke-dashoffset:' + percent : 'stroke:transparent'"
                class="svgplay__circle"
                cx="24.26"
                cy="24.26"
                r="22.5"
              />
              <polyline class="svgplay__line" points="21.51 16.76 29.01 24.26 21.51 31.76" />
            </svg>
          </button>
          <button aria-label="Próximo" role="button" class="next" @click="incrementSlide(1)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 48.52 48.52"
            >
              <circle
                :style="'stroke-dashoffset:' + percent"
                class="svgplay__circle"
                cx="24.26"
                cy="24.26"
                r="22.5"
              />
              <polyline class="svgplay__line" points="21.51 16.76 29.01 24.26 21.51 31.76" />
            </svg>
          </button>

          <ul class="dots" :current-slide="current" :data-slides-count="'0' + this.length">
            <li
              v-for="(slide,index) of slides"
              :class="index === current ? 'active' : ''"
              :key="index"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonShadow from "@/components/button-shadow";
export default {
  name: "Slides",
  props: ["slides", "length"],
  components: {
    ButtonShadow
  },
  data() {
    return {
      textButton: "Saiba Mais",
      current: 0,
      timer: 0,
      percent: 0,
      interval: 0,
      duration: 5000,
      progress: 0,
      secondLast: 0,
      isPaused: false,
      playslides: []
    };
  },
  mounted() {
    this.secondLast = this.length - 1;
    this.playslides[0] = this.slides[0];
    this.playslides[1] = this.slides[1];
    this.start();
  },
  methods: {
    incrementSlide(val) {
      if (val > 0 && this.current + val < this.length) {
        this.current += val;
      } else if (val > 0) {
        this.current = 0;
      } else if (val < 0 && this.current + val < 0) {
        this.current = this.length - 1;
      } else {
        this.current += val;
      }
      this.restart();
    },
    start() {
      this.timer = new Date().getTime();
      this.progress = setInterval(this.going, this.duration / 136);
      this.interval = setInterval(this.process, this.duration);
    },
    stop() {
      clearInterval(this.interval);
      clearInterval(this.progress);
      clearInterval(this.percent);
    },
    restart() {
      clearInterval(this.interval);
      clearInterval(this.progress);
      clearInterval(this.percent);
      this.start();
    },
    process() {
      if (!this.isPaused) {
        this.current++;
        if (this.current >= this.length) {
          this.current = 0;
        }
        this.playslides[this.current % 2] = this.slides[this.current];
        this.restart();
      }
    },
    going() {
      if (!this.isPaused) {
        let time = new Date().getTime();
        this.percent = Math.floor((136 * (time - this.timer)) / this.duration);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_flexbox.scss";
@import "./assets/scss/_variables.scss";

section {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.height__100 {
  height: 100%;
}
.display__none {
  display: none;
}
#slides {
  @include flexbox;
  z-index: 999;
  height: 100vh;
  z-index: 8;
  margin: 0 5%;
  @media screen and (min-width: $break-md) {
    margin: 0 13% 10% 10%;
  }
  &:after {
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(118, 145, 161, 1) 0%,
      rgba(88, 99, 113, 1) 90.1%
    );
    width: 50%;
    height: 100%;
    content: "";
    position: absolute;
    right: 0;
    z-index: -1;
  }
}
.slides__text-rotate {
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

.slide__content {
  position: absolute;
  height: 100%;
  @include flexbox;
  @include align-items(flex-start);
  @include justify-content(center);
  @media screen and (min-width: $break-md) {
    @include align-items(center);
    @include justify-content(flex-start);
  }
}

.slide__title {
  @include flexbox;
  @include flex-direction(column);
  @include align-items(center);
  position: relative;
  z-index: 25;
  text-align: center;
  margin-top: calc(35vh);
  flex: auto;
  @media screen and (min-width: $break-md) {
    @include align-items(flex-start);
    margin-top: inherit;
    width: 49%;
    min-width: 49%;
    text-align: left;
  }
}
.slide__title h1 {
  color: $white;
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 40px;
  display: flex;
  text-shadow: 3px 3px 10px rgba(88, 99, 113, 0.42);
  padding-bottom: 30px;
  @media screen and (min-width: $break-sm) {
    left: 0px;
  }
  @media screen and (min-width: $break-md) {
    font-size: 50px;
    color: $primary;
    text-shadow: inherit;
  }
  @media screen and (min-width: $break-xl) {
    font-size: 60px;
  }
}
#slides .slide__img {
  position: absolute;
  z-index: 11;
  bottom: 10%;
  width: 100%;
  @include flexbox;
  @include align-items(center);
  display: none;
  @media screen and (min-width: $break-sm) {
    height: 90%;
    right: -5%;
    top: 3%;
    bottom: auto;
    position: relative;
    width: inherit;
    display: inherit;
  }
}
#slides .slide__img img {
  width: 100%;
  @media screen and (min-width: $break-sm) {
    height: 100%;
  }
}
#slides .controls__slides {
  position: relative;
  width: 230px;
  height: 35px;
  top: -5%;
  bottom: 0;
  margin: 0 auto;
  @include flexbox;
  @include align-items(center);
  z-index: 999;
  align-self: flex-end;
  @media screen and (min-width: $break-sm) {
    margin: initial;
    bottom: 0%;
    vertical-align: bottom;
    position: relative;
  }
}

#slides .svgplay__circle,
#slides .svgplay__line {
  fill: none;
  stroke-linecap: round;
  stroke-width: 3px;
}

#slides .svgplay__line {
  stroke: $primary;
  transform: rotate(90deg);
  transform-origin: center center;
}

#slides .next svg {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
#slides .prev svg {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

#slides .svgplay__circle {
  stroke-dasharray: 138px;
  stroke-dashoffset: 0;
  stroke: $primary;
}

.run-animation {
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

@keyframes expandThenFadeOut {
  from {
    stroke-dashoffset: 138px;
    stroke: $primary;
  }
  to {
    stroke-dashoffset: 0;
    stroke: $primary;
  }
}

@-webkit-keyframes expandThenFadeOut {
  from {
    stroke-dashoffset: 138px;
    stroke: $primary;
  }
  to {
    stroke-dashoffset: 0;
    stroke: $primary;
  }
}

#slides .prev,
#slides .next {
  position: absolute;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  line-height: 0px;
  text-align: center;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: $white;
  color: $primary;
  & svg {
    width: 30px;
    height: 30px;
    display: flex;
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
  & .svgplay__line {
    stroke: $primary;
  }
  & .svgplay__circle {
    stroke: $primary;
  }
}
#slides .prev {
  left: 0px;
  opacity: 1;
}
#slides .next {
  right: 0px;
  margin-left: auto;
  text-indent: 2px;
}
#slides .dots {
  position: absolute;
  display: flex;
  text-align: center;
  width: 100px;
  height: 4px;
  background: #fff;
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:before {
    content: "01";
    font-size: 13px;
    font-family: "Quicksand";
    font-weight: 700;
    color: $primary;
    padding-right: 10px;
    margin-top: -4px;
    display: flex;
    position: absolute;
    left: -20px;
  }
  &:after {
    content: attr(data-slides-count);
    font-size: 13px;
    font-family: "Quicksand";
    font-weight: 700;
    color: $white;
    padding-left: 15px;
    margin-top: -4px;
    display: flex;
    position: absolute;
    right: -25px;
    @media screen and (min-width: $break-sm) {
      color: $primary;
    }
  }
  li {
    flex-grow: 1;
    height: 4px;
    background: $white;
    display: inline-block;
    cursor: pointer;
    transition: all 1s cubic-bezier(0.2, 1, 0.3, 1) 0s;
    border-radius: 5px;
    &.active {
      background: $primary;
      border-radius: 5px;
      flex-grow: 1;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
}

#slides .slides {
  width: 100vw;
  height: calc(100vh - 60px);
  position: relative;
  font-size: 40px;
  display: flex;
  transition: all 1s;
  @media (min-width: $break-md) {
    font-size: 80px;
    height: 100%;
  }
  @media (min-width: $break-md) {
    font-size: 100px;
  }
  @media (min-width: $break-lg) {
    font-size: 140px;
  }

  .animated {
    transition: all 1s;
    position: absolute;
    animation: acrossIn 1s ease-out both;
  }

  .slide__in {
    opacity: 0;
    animation: acrossIn 1s ease-out both;
  }

  .slide__in__active {
    transition-delay: 250ms;
  }

  .slide__out {
    opacity: 1;
  }

  .slide__out__active {
    opacity: 0;
    animation: acrossOut 0.6s ease-in both;
  }
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
#slides button {
  padding: 10px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background: $primary;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    opacity: 0.2;
    cursor: no-drop;
  }
}
</style>