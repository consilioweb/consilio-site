<template>
  <div id="slider">
    <div class="slides row container">
      <transition-group
        name="slide"
        mode="out-in"
        enter-class="slide-in"
        leave-class="slide-out"
        enter-active-class="animated slide-in-active"
        leave-active-class="animated slide-out-active"
      >
        <div
          v-for="(slide, index) in slides"
          v-if="slide.menu_order == active"
          :key="index+1"
          class="slider-title"
        >
          <h1>{{ slide.title.rendered }}</h1>
        </div>
      </transition-group>
      <transition name="progress-indicator">
        <ul class="progress-indicator" :data-slides-count="'0' + slides.length" v-if="loaded">
          <li
            v-for="(slide,index) of slides"
            :class="index === currentActiveSlide ? 'progress-indicator__bar  progress-indicator__bar--active' : 'progress-indicator__bar'"
            :key="index"
          ></li>
        </ul>
      </transition>
      <div class="controls-slider">
        <span class="prev" @click="move(-1)">
          <chevron-left-icon />
        </span>
        <span class="next" @click="move(1)">
          <chevron-right-icon />
        </span>

        <ul class="dots">
          <li
            v-for="(dot, index) in slides"
            :key="index"
            :class="{ active: ++index === active }"
            @click="jump(index)"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "@/api/index";
import ChevronLeftIcon from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  },
  data() {
    return {
      slides: {},
      active: 1,
      countSlides: 0
    };
  },
  methods: {
    move(amount) {
      let newActive;
      const newIndex = this.active + amount;
      if (newIndex > this.countSlides) newActive = 1;
      if (newIndex === 0) newActive = this.countSlides;
      this.active = newActive || newIndex;
    },
    jump(index) {
      this.active = index;
    }
  },
  mounted() {
    axios
      .get("http://apiconsilio.local/wp-json/wp/v2/slider")
      .then(response => {
        this.slides = response.data;
        this.countSlides = response.data.length;
      });
    JSON.stringify({
      filter: { published: true },
      sort: { _created: -1 },
      populate: 1
    });
    this.changeArrayItem;
  }
};
</script>


<style lang="scss">
$primary: #586371;
#slider h1 {
  color: $primary;
  font-size: 75px;
  font-family: "Montserrat";
  font-weight: 900;
  @media screen and (max-width: 600px) {
    font-size: 40px;
    display: flex;
    margin-left: 20px;
  }
}
#slider .slider-title {
  width: 50%;
}
#slider .controls-slider {
  position: absolute;
  width: 250px;
  height: 35px;
  bottom: 10%;
  left: 0;
  display: flex;
  align-items: center;
}
#slider .prev,
#slider .next {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 2px solid $primary;
  color: $primary;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  line-height: 0px;
  text-align: center;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  & svg {
    width: 20px;
    height: 20px;
    display: flex;
    margin-top: 5px;
    margin-left: 5px;
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
#slider .prev {
  left: 0px;
  opacity: 1;
}
#slider .next {
  right: 0px;
  margin-left: auto;
  text-indent: 2px;
}
#slider .dots {
  position: absolute;
  display: flex;
  text-align: center;
  width: 100px;
  height: 4px;
  background: #fff;
  position: relative;
  margin: 0 auto;
  &:before {
    content: "01";
    font-size: 14px;
    font-family: "Quicksand Bold";
    color: $primary;
    padding-right: 10px;
    margin-top: -4px;
    display: flex;
    position: absolute;
    left: -30px;
  }
  &:after {
    content: "03";
    font-size: 14px;
    font-family: "Quicksand Bold";
    color: $primary;
    padding-left: 10px;
    margin-top: -4px;
    display: flex;
    position: absolute;
    right: -30px;
  }
  li {
    flex-grow: 1;
    height: 4px;
    background: #ffffff;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0s;
    border-radius: 5px;
    &.active {
      background: $primary;
      border-radius: 5px;
      flex-grow: 1;
    }
  }
}

#slider .slides {
  margin: 0 auto;
  position: relative;
  font-size: 40px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-weight: bold;
  @media (min-width: 600px) {
    font-size: 80px;
  }
  @media (min-width: 900px) {
    font-size: 140px;
  }

  .animated {
    transition: all 400ms;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .slide-in {
    opacity: 0;
    transform: translate(-40%, -50%);
  }

  .slide-in-active {
    transition-delay: 150ms;
  }

  .slide-out {
    opacity: 1;
  }

  .slide-out-active {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
}

#slider button {
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