<template>
  <div class="cases__content">
    <div class="card-carousel" ref="card-carousel">
      <client-only>
        <ul
          class="controls controls__carousel"
          id="slider-dots"
          aria-label="Navegação do carssousel"
          tabindex="0"
        >
          <li @click="prev" class="prev" data-controls="prev" tabindex="-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 48.52 48.52"
            >
              <circle class="svgplay__circle" cx="24.26" cy="24.26" r="22.5" />
              <polyline class="svgplay__line" points="21.51 16.76 29.01 24.26 21.51 31.76" />
            </svg>
          </li>
          <li @click="next" class="next" data-controls="next" tabindex="-1">
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
            <div class="card-carousel__item--cover" v-lazy-container="{ selector: 'img' }">
              <client-only>
                <img
                  :data-src="item.img"
                  v-if="item.img != ''"
                  :alt="'Imagem destaque do case '+item.client"
                  class="card-carousel--img lazyload"
                />
              </client-only>
            </div>
            <div class="card-carousel__item--title">
              <h3>{{ item.client }}</h3>
            </div>
            <div class="card-carousel__item--button">
              <button-shadow :text="textButton" />
            </div>
          </div>
        </carousel>
      </client-only>
    </div>
  </div>
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
    textButton: "Em breve",
    carouselOptions: {
      lazyload: true,
      lazyloadSelector: ".lazyload",
      loop: true,
      controls: false,
      autoplay: false,
      mouseDrag: true,
      autoplayHoverPause: true,
      center: true,
      nav: false,
      startIndex: 0,
      autoplayButtonOutput: false,
      arrowKeys: true,
      controlsContainer: "#slider-dots",
      speed: 2000,
      autoplayTimeout: 4000,
      preventActionWhenRunning: true,
      preventScrollOnTouch: "auto"
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

<style lang="scss" scoped>
.cases__content {
  @include flexbox;
  @include justify-content(center);
  padding-bottom: 30px;
  position: relative;
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: $break-md) {
    margin: 0 auto;
  }
}
.card-carousel {
  @include flexbox;
  @include flex-direction(column);
  position: relative;
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
  transition: all 2s ease-in-out;
  background: $secondary;
  flex: 1;
  padding: 0px;
  position: relative;
  min-height: 450px;
  height: 100%;
  -webkit-touch-callout: none; /* iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Possível implementação no futuro */
  overflow: hidden;
  @media screen and (min-width: $break-md) {
    overflow: inherit;
  }
  @media screen and (min-width: $break-md) {
    //margin: 0% 5%;
    padding: 0px;
    min-height: 530px;
  }
  & h3 {
    color: #2f2f2f;

    transition: all 2s ease-in-out;
  }
  &.tns-slide-active {
    filter: inherit;
    opacity: 1;
    overflow: inherit;
    transition: all 2s ease-in-out;
    &.tns-slide-active h3 {
      color: $white !important;
    }
  }
}
.card-carousel__item--cover {
  position: absolute;
  display: flex;
  justify-content: center;
}
.card-carousel__item--cover img {
  margin-top: -10px;
  @media screen and (min-width: $break-md) {
    margin-top: -180px;
    margin-left: 70px;
  }
}
.card-carousel__item--title {
  position: absolute;
  left: 40px;
  bottom: 100px;
  @media screen and (min-width: $break-md) {
    left: 70px;
  }
}
.card-carousel__item--title h3 {
  font-size: 40px;
  font-family: "Montserrat";
  font-weight: 900;
  display: flex;
  padding-bottom: 20px;
  line-height: 1.1;
  text-shadow: 4px 4px 17px rgba(46, 61, 98, 0.23);
  @media screen and (min-width: $break-md) {
    font-size: 50px;
  }
}
.card-carousel__item--button {
  position: absolute;
  bottom: 50px;
  left: 20px;
  transform: scale(0.8);
  @media screen and (min-width: $break-md) {
    left: 50px;
  }
}

.tns-slider > .tns-item {
  box-sizing: inherit !important;
}
.tns-slider {
  @include flexbox;
  margin: 0 auto;
}
.tns-item {
  margin: 10px 2em 0 2em;
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
    margin: 10px 2.5em 0 2.5em;
  }
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
    width: 30px;
    height: 30px;
    display: flex;
    cursor: pointer;
    @media screen and (min-width: $break-md) {
      width: 40px;
      height: 40px;
    }
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
  left: -10px;
  opacity: 1;
  @media screen and (min-width: $break-md) {
    left: -20px;
  }
}
.next {
  right: -10px;
  margin-left: auto;
  text-indent: 2px;
  @media screen and (min-width: $break-md) {
    right: -20px;
  }
}
.tns-ovh {
  overflow: inherit !important;
}
</style>