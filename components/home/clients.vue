<template>
  <section class="clients">
    <div class="clients__container">
      <div class="clients__title">
        <parallax-element :strength="5" :type="'translate'">
          <h2>
            nossos
            <br />clientes
          </h2>
        </parallax-element>
        <span>Já tiveram resultados conosco</span>
      </div>
      <div class="clients__content">
        <div class="clients-carousel" ref="clients-carousel">
          <client-only>
            <carousel ref="carousel" v-bind="carouselOptions">
              <div
                class="clients-carousel__item"
                ref="clients-carousel__item"
                v-for="(client, index) in clients"
                :key="index"
              >
                <div class="clients-carousel__item--container">
                  <figure class="clients-carousel__item--img">
                    <img :data-src="client.img" :alt="client.title" class="lazyload" />
                  </figure>
                </div>
              </div>
            </carousel>
            <ul
              class="controls clients-carousel__controls"
              id="clients-dots"
              aria-label="Navegação do carousel"
              tabindex="0"
            >
              <li @click="prev" class="prev" data-controls="prev">
                <svg-icon name="icons/left-arrow" />
              </li>
              <li @click="next" class="next" data-controls="next">
                <svg-icon name="icons/right-arrow" />
              </li>
            </ul>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Clients",
  props: ["clients", "length"],
  data: () => ({
    carouselOptions: {
      lazyload: true,
      lazyloadSelector: ".lazyload",
      loop: true,
      controls: false,
      autoplay: false,
      items: 5,
      center: true,
      mouseDrag: true,
      autoplayHoverPause: true,
      nav: false,
      autoplayButtonOutput: false,
      arrowKeys: true,
      autoplayTimeout: 4000,
      controlsContainer: "#clients-dots",
      speed: 2000,
      responsive: {
        350: {
          items: 1
        },
        500: {
          items: 2
        },
        800: {
          items: 3
        },
        1200: {
          items: 5
        }
      }
      //rewind: true
    }
  }),
  methods: {
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
@import "tiny-slider/src/tiny-slider";

.clients {
  position: relative;
  &__container {
    margin: 5%;
    @include flexbox;
    @include align-items(center);
    @include flex-direction(column);
    @include flex-flow(wrap);
    padding: 80px 0 50px 0; // Correction
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
      margin: 10% 13% 10% 10%;
      padding: 0px 0; // Correction
    }
  }
  &__title {
    @include flexbox;
    @include justify-content(center);
    @include flex-direction(column);
    @include align-items(center);
    width: 100%;
    padding-bottom: 10px;
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
    overflow: hidden;
    padding: 40px 0 20px 0;
    @media screen and (min-width: $break-md) {
      padding: 40px 0;
    }
  }
  &__footer {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-top: 20px;
  }
}
.clients-carousel {
  width: inherit;
  &__controls {
    z-index: 999;
    margin-top: 50px;
    @media screen and (min-width: $break-sm) {
    }
  }
  &__item {
    &--container {
      @include flexbox;
      @include flex-direction(row);
      @include align-items(center);
      @include justify-content(center);
    }
    &--img {
      @include flexbox;
      @include align-items(center);
      position: relative;
      & img {
        height: 100px;
        @media screen and (min-width: $break-md) {
          height: 60px;
        }
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        opacity: 0.5;
        transition: all 1s ease;
        &:hover {
          filter: none;
          opacity: 1;
        }
      }
    }
  }
}
.prev,
.next {
  position: absolute;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  line-height: 0px;
  text-align: center;
  bottom: 0px;
  z-index: 9999;
  outline: none;
  & svg {
    width: 25px;
    height: 25px;
    display: flex;
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.3s ease;
    &:hover {
      fill: $primary !important;
      opacity: 1;
    }
  }
  &:hover {
    background: transparent;
    color: #fff;
    outline: none;
  }
  &:active {
    outline: none;
  }
}
.prev {
  left: 40%;
  opacity: 1;
  @media screen and (min-width: $break-md) {
    right: 51%;
    left: inherit;
  }
}
.next {
  right: 40%;
  margin-left: auto;
  text-indent: 2px;
  @media screen and (min-width: $break-md) {
    left: 51%;
    right: inherit;
  }
}
</style>