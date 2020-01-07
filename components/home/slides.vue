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
            class="slide__content"
            v-for="(slide, index) in slides"
            v-if="index === current"
            :key="slide.id"
          >
            <parallax-element style="z-index: 20;" :parallaxStrength="10" :type="'translation'">
              <div class="slide__title">
                <h1>{{ slide.title }}</h1>
              </div>
            </parallax-element>
            <div v-if="slide.content" class="slide__img" v-html="slide.content"></div>
            <div v-else class="slide__img">
              <client-only>
                <img v-if="slide.img != ''" :alt="slide.title" :src="slide.img" />
              </client-only>
            </div>
          </div>
        </transition-group>
        <div class="controls__slides">
          <button
            aria-label="Anterior"
            role="button"
            aria-hidden="true"
            :class="current == 0 ? 'display__none' : ''"
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
          <button
            aria-label="Próximo"
            role="button"
            :class="current == secondLast ? 'display__none' : ''"
            class="next"
            :style="current > 0 ? 'right: 0px;' : 'right: 50px;'"
            @click="incrementSlide(1)"
          >
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

          <ul
            class="dots"
            :style="current > 0 ? 'left: 0px;' : 'left: -50px;'"
            :current-slide="current"
            :data-slides-count="'0' + this.length"
          >
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
export default {
  name: "Slides",
  props: ["slides", "length"],
  data() {
    return {
      current: 0,
      timer: 0,
      percent: 0,
      interval: 0,
      duration: 5000,
      progress: 0,
      secondLast: 0,
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
      this.current++;
      if (this.current >= this.length) {
        this.current = 0;
      }
      this.playslides[this.current % 2] = this.slides[this.current];
      this.restart();
    },
    going() {
      let time = new Date().getTime();
      this.percent = Math.floor((136 * (time - this.timer)) / this.duration);
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100vw;
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
  margin: 0 13% 10% 10%;
  height: 100vh;
  z-index: 8;
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
  @include align-items(center);
}

.slide__title {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 25;
}
.slide__title h1 {
  color: $primary;
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 40px;
  display: flex;
  @media screen and (min-width: $break-sm) {
    left: 0px;
  }
  @media screen and (min-width: $break-md) {
    font-size: 60px;
  }
  @media screen and (min-width: $break-xl) {
    font-size: 70px;
  }
}
#slides .slide__img {
  position: absolute;
  z-index: 11;
  height: 100%;
  right: -10%;
  @include flexbox;
  @include align-items(center);
  @media screen and (min-width: $break-sm) {
  }
}
#slides .slide__img img {
  height: 100%;
}
#slides .controls__slides {
  position: relative;
  width: 230px;
  height: 35px;
  top: -10%;
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
    stroke: #586371;
  }
  to {
    stroke-dashoffset: 0;
    stroke: #586371;
  }
}

@-webkit-keyframes expandThenFadeOut {
  from {
    stroke-dashoffset: 138px;
    stroke: #586371;
  }
  to {
    stroke-dashoffset: 0;
    stroke: #586371;
  }
}

#slides .prev,
#slides .next {
  position: absolute;
  margin: 0;
  padding: 0;
  color: $primary;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  line-height: 0px;
  text-align: center;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  & svg {
    width: 30px;
    height: 30px;
    display: flex;
  }
  &:hover {
    background: $primary;
    color: #fff;
    transform: scale(1.2);
  }
  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
}
#slides .prev:hover .svgplay__line,
#slides .next:hover .svgplay__line {
  stroke: $white;
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
    color: $primary;
    padding-left: 15px;
    margin-top: -4px;
    display: flex;
    position: absolute;
    right: -25px;
  }
  li {
    flex-grow: 1;
    height: 4px;
    background: #ffffff;
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
  height: 100%;
  position: relative;
  font-size: 40px;
  display: flex;
  transition: all 1s;
  @media (min-width: $break-md) {
    font-size: 80px;
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