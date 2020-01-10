<template>
  <section class="testimonial">
    <div class="testimonial__container">
      <div class="testimonial__title">
        <parallax-element :strength="5" :type="'translate'">
          <h2>depoimentos</h2>
        </parallax-element>
      </div>
      <div class="testimonial__content">
        <div class="testimonial-carousel" ref="testimonial-carousel">
          <client-only>
            <carousel ref="carousel" v-bind="carouselOptions">
              <div
                class="testimonial-carousel__item"
                ref="testimonial-carousel__item"
                v-for="(item, index) in testimonials"
                :key="index"
              >
                <div class="testimonial-carousel__item--container">
                  <figure class="testimonial-carousel__item--img">
                    <svg
                      viewBox="0 0 300 300"
                      width="300"
                      height="300"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                    >
                      <g>
                        <clipPath :id="'testimonial-mask-'+index">
                          <path
                            d="M299.86 153.63C295.23 191.11 272.1 254.05 149.93 288.29C68.49 311.12 22.52 294.77 12.03 239.24C-4.01 178.77 -4.01 121.39 12.03 67.1C36.09 -14.34 102.73 -6.59 178.16 21.75C253.59 50.09 304.49 116.15 299.86 153.63Z"
                          />
                        </clipPath>
                      </g>
                      <image
                        :clip-path="'url(#testimonial-mask-'+index+')'"
                        height="100%"
                        width="100%"
                        :xlink:href="item.img"
                        :alt="'Foto de '+item.title"
                        class="lazyload"
                      />
                    </svg>
                    <svg
                      style="position: absolute;top: -20px;left: 20px;z-index: -1;"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 300 300"
                      width="300"
                      height="300"
                    >
                      <defs>
                        <path
                          d="M299.86 153.63C295.23 191.11 272.1 254.05 149.93 288.29C68.49 311.12 22.52 294.77 12.03 239.24C-4.01 178.77 -4.01 121.39 12.03 67.1C36.09 -14.34 102.73 -6.59 178.16 21.75C253.59 50.09 304.49 116.15 299.86 153.63Z"
                          :id="'g4SpPpRG0-'+index"
                        />
                      </defs>
                      <use
                        :xlink:href="'#g4SpPpRG0-'+index"
                        opacity="1"
                        fill="#ffffff"
                        fill-opacity="1"
                      />
                    </svg>
                  </figure>
                  <div class="testimonial-carousel__item--content">
                    <div class="testimonial-carousel__item--content--head">
                      <h3>{{ item.title }}</h3>
                    </div>
                    <div class="testimonial-carousel__item--content--content" v-html="item.content"></div>
                    <div class="testimonial-carousel__item--content--footer">
                      <b>{{ item.customer_testimonial }}</b>
                      | {{ item.complement_customer_testimonial }}
                    </div>
                  </div>
                </div>
              </div>
            </carousel>
            <ul
              class="controls testimonial-carousel__controls"
              id="testimonials-dots"
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
import ButtonShadow from "@/components/button-shadow";

export default {
  name: "Testimonials",
  props: ["testimonials", "length"],
  components: {
    ButtonShadow
  },
  data: () => ({
    textButton: "Ver Case",
    carouselOptions: {
      lazyload: true,
      lazyloadSelector: ".lazyload",
      loop: true,
      controls: false,
      autoplay: false,
      items: 1,
      mouseDrag: true,
      autoplayHoverPause: true,
      center: true,
      nav: false,
      autoplayButtonOutput: false,
      arrowKeys: true,
      controlsContainer: "#testimonials-dots",
      speed: 2000,
      autoplayTimeout: 4000
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

.testimonial {
  position: relative;
  &__container {
    margin: 5%;
    @include flexbox;
    @include align-items(center);
    @include flex-direction(column);
    @include flex-flow(wrap);
    padding-top: 30px; // Correction
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
      margin: 10% 13% 10% 10%;
      padding-top: 0px; // Correction
    }
  }
  &__title {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-bottom: 10px;
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
    padding: 10px 0 80px 0;
    @media screen and (min-width: $break-md) {
      padding: 0;
    }
  }
  &__footer {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-top: 20px;
  }
}
.testimonial-carousel {
  width: inherit;
  &__controls {
    z-index: 999;
    @media screen and (min-width: $break-sm) {
      margin: initial;
    }
  }
  &__item {
    &--container {
      @include flexbox;
      @include align-items(center);
      @include flex-direction(column);
      @include flex-flow(wrap);
      padding-left: 0px;
      @media screen and (min-width: $break-md) {
        @include flex-direction(row);
        @include flex-flow(nowrap);
        padding-left: 50px;
      }
    }
    &--img {
      @include flexbox;
      @include align-items(center);
      position: relative;
      -webkit-filter: drop-shadow(10px 10px 8px rgba(46, 61, 97, 0.1));
      filter: drop-shadow(10px 10px 8px rgba(46, 61, 97, 0.1));
      transform: scale(0.8);
      &:before {
        @include flexbox;
        @include align-items(center);
        @include justify-content(center);
        text-align: center;
        content: '"';
        font-size: 80px;
        color: $white;
        font-family: Poppins, sans-serif;
        font-style: oblique;
        width: calc(60px - 30px);
        height: calc(60px - 55px);
        padding-top: 55px;
        padding-right: 30px;
        background: $secondary;
        left: -10px;
        position: absolute;
        border-radius: 50%;
        box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.08);
      }
    }
    &--content {
      padding: 20px 0;
      @media screen and (min-width: $break-md) {
        padding: 0px 60px 0px 30px;
      }
      &--head {
        font-family: Poppins, sans-serif;
        font-size: 28px;
        font-weight: 600;
        color: $tertiary;
        & h3 {
          //Underline
          width: calc(100%);
          background-image: linear-gradient(
            transparent calc(100% - 10px),
            rgba(88, 99, 113, 0.08) 10px
          );
          background-repeat: no-repeat;
          background-size: 50% 100%;
          transition: background-size 1s;
          &:hover {
            background-size: 100% 100%;
          }
        }
      }
      &--content {
        color: $primary;
        padding: 20px 0;
      }
      &--footer {
        color: $primary;
        font-size: 13px;
        & b {
          font-weight: 600;
        }
      }
    }
  }
}

.prev,
.next {
  bottom: 0px;
  @media screen and (min-width: $break-md) {
    top: inherit;
  }
  position: absolute;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  line-height: 0px;
  text-align: center;
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
  right: 53%;
  opacity: 1;
  @media screen and (min-width: $break-md) {
    right: 60px;
  }
}
.next {
  left: 53%;
  margin-left: auto;
  text-indent: 2px;
  @media screen and (min-width: $break-md) {
    right: 20px;
    left: inherit;
  }
}
.tns-item {
  opacity: 0;
  transition: all 2s ease-in-out;
}
.tns-slide-active {
  opacity: 1;
}
</style>