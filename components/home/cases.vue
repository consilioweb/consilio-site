<template>
  <section class="cases">
    <div class="cases__container">
      <div class="cases__title">
        <parallax-element :parallaxStrength="-15" :type="'translation'">
          <h2>cases</h2>
        </parallax-element>
        <span class="cases__title--bg">portfólio</span>
      </div>
      <div class="cases__content">
        <div class="card-carousel" ref="card-carousel">
          <client-only>
            <ul
              class="controls controls__carousel"
              id="slider-dots"
              aria-label="Navegação do carssousel"
              tabindex="0"
            >
              <li
                @click="prev"
                class="prev"
                data-controls="prev"
                aria-controls="customize"
                tabindex="-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48.52 48.52"
                >
                  <circle class="svgplay__circle" cx="24.26" cy="24.26" r="22.5" />
                  <polyline class="svgplay__line" points="21.51 16.76 29.01 24.26 21.51 31.76" />
                </svg>
              </li>
              <li
                @click="next"
                class="next"
                data-controls="next"
                aria-controls="customize"
                tabindex="-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 48.52 48.52"
                >
                  <circle class="svgplay__circle" cx="24.26" cy="24.26" r="22.5" />
                  <polyline class="svgplay__line" points="21.51 16.76 29.01 24.26 21.51 31.76" />
                </svg>
              </li>
            </ul>
            <carousel ref="carousel" v-bind="carouselOptions">
              <div
                class="card-carousel__item"
                ref="card-carousel__item"
                v-for="(item, index) in cases"
                :key="index"
              >
                <div class="card-carousel__item--cover">
                  <img
                    v-if="item.img != ''"
                    :alt="'Imagem destaque do case '+item.client"
                    :src="item.img"
                  />
                </div>
                <div class="card-carousel__item--title">
                  <h3>{{ item.client }}</h3>
                </div>
                <div class="card-carousel__item--button">
                  <button-shadow :title="buttonShadow" />
                </div>
              </div>
            </carousel>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonShadow from "@/components/button-shadow";

export default {
  name: "Cases",
  props: ["cases", "length"],
  components: {
    ButtonShadow
  },
  data: () => ({
    buttonShadow: "Ver Case",
    carouselOptions: {
      loop: true,
      controls: false,
      autoplay: true,
      mouseDrag: true,
      autoplayHoverPause: true,
      center: true,
      nav: false,
      startIndex: 1,
      autoplayButtonOutput: false,
      arrowKeys: true,
      preventActionWhenRunning: true,
      autoplayTimeout: 2500,
      controlsContainer: "#slider-dots"
    }
  }),
  methods: {
    getInfo: function(event) {
      this.$refs.carousel.slider.getInfo();
    },
    prev: function(event) {
      this.$refs.carousel.slider.goTo("prev");
    },
    next: function(event) {
      this.$refs.carousel.slider.goTo("next");
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";
@import "tiny-slider/src/tiny-slider.scss";

.cases {
  position: relative;
}
.cases__container {
  margin: 5%;
  @include flexbox;
  @include align-items(center);
  @include flex-direction(column);
  @include flex-flow(wrap);
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
    margin: 10% 13% 10% 10%;
  }
}
.cases__title {
  @include flexbox;
  @include justify-content(center);
  width: 100%;
  padding-bottom: 30px;
}

.cases__title--bg {
  position: absolute;
  white-space: nowrap;
  color: $primary;
  opacity: 0.04;
  font-size: 180px;
  font-family: "Montserrat";
  font-weight: 900;
  z-index: -2;
  top: -5%;
}
.cases__content {
  @include flexbox;
  @include justify-content(center);
  padding-bottom: 30px;
  position: relative;
  margin: 0 auto;
}
.card-carousel {
  @include flexbox;
  @include flex-direction(column);
  position: relative;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
  }
}
.card-carousel__item {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  opacity: 0.3;
  @include flexbox;
  @include align-items(center);
  @include justify-content(center);
  @include flex-direction(column);
  background: $secondary;
  flex: 1;
  padding: 0px;
  position: relative;
  min-height: 530px;
  height: 100%;
  -webkit-touch-callout: none; /* iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Possível implementação no futuro */
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media screen and (min-width: $break-md) {
    //margin: 0% 5%;
    padding: 0px;
  }
  & h3 {
    color: #2f2f2f;
  }
  &.tns-slide-active {
    filter: inherit;
    opacity: 1;
    &.tns-slide-active h3 {
      color: $white !important;
    }
  }
}
.card-carousel__item--cover {
  position: absolute;
  width: 100%;
  height: 100%;
}
.card-carousel__item--cover img {
  width: 100%;
  width: calc(130% - 3rem);
  margin-left: -10%;
  margin-top: -30px;
}
.card-carousel__item--title {
  position: absolute;
  left: 70px;
  bottom: 100px;
}
.card-carousel__item--title h3 {
  font-size: 60px;
  font-family: "Montserrat";
  font-weight: 900;
  display: flex;
  padding-bottom: 20px;
  line-height: 1.1;
  text-shadow: 4px 4px 17px rgba(46, 61, 98, 0.23);
}
.card-carousel__item--button {
  position: absolute;
  bottom: 50px;
  left: 50px;
  transform: scale(0.8);
}

.tns-slider > .tns-item {
  box-sizing: inherit !important;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.tns-slider {
  @include flexbox;
  margin: 0 auto;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.tns-item {
  margin: 10px 3em 0 3em;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.controls__carousel {
  z-index: 999;
  @media screen and (min-width: $break-sm) {
    margin: initial;
  }
}
.svgplay__circle,
.svgplay__line {
  fill: none;
  stroke-linecap: round;
  stroke-width: 3px;
}

.svgplay__line {
  stroke: $primary;
  transform: rotate(90deg);
  transform-origin: center center;
}

.next svg {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.prev svg {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.prev,
.next {
  position: absolute;
  margin: 0;
  padding: 0;
  color: $gray_light;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  line-height: 0px;
  text-align: center;
  top: calc(50% - 20px);
  z-index: 9999;
  -webkit-box-shadow: 1px 13px 41px -4px rgba(46, 61, 98, 0.15);
  -moz-box-shadow: 1px 13px 41px -4px rgba(46, 61, 98, 0.15);
  box-shadow: 1px 13px 41px -4px rgba(46, 61, 98, 0.15);
  outline: none;
  & svg {
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
  }
  &:hover {
    background: transparent;
    color: #fff;
    transform: scale(1.2);
    -webkit-box-shadow: 1px 13px 41px 5px rgba(46, 61, 98, 0.19);
    -moz-box-shadow: 1px 13px 41px 5px rgba(46, 61, 98, 0.19);
    box-shadow: 1px 13px 41px 5px rgba(46, 61, 98, 0.19);
    outline: none;
  }
  &:active {
    transform: translate(0, 3px) scale(1.2);
    outline: none;
  }
}
.prev {
  left: -20px;
  opacity: 1;
}
.next {
  right: -20px;
  margin-left: auto;
  text-indent: 2px;
}
.tns-ovh {
  overflow: inherit !important;
}
</style>