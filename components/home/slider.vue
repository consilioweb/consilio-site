<template>
  <div id="slider">
    <div class="slides row container">
      <div v-for="(slide,idx) in slides" :key="idx" v-if="slide == active">
        <div class="slider-title">
          <h1>{{ slide.title }}</h1>
        </div>
      </div>

      <div class="controls-slider">
        <span class="prev" @click="move(-1)">
          <chevron-left-icon />
        </span>
        <span class="next" @click="move(1)">
          <chevron-right-icon />
        </span>

        <ul class="dots">
          <li
            v-for="(dot, id) in slides"
            :key="id"
            :class="{ active: ++id === active }"
            @click="jump(id)"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChevronLeftIcon from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
export default {
  name: "Slider",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  },
  methods: {
    move(amount) {
      let newActive;
      const newIndex = this.active + amount;
      if (newIndex > this.slides) newActive = 1;
      if (newIndex === 0) newActive = this.slides;
      this.active = newActive || newIndex;
    },
    jump(index) {
      this.active = index;
    }
  },
  data() {
    return {
      slides: [],
      active: 0
    };
  },
  mounted() {
    this.$slider;
    axios.get("http://apiconsilio.local/wp-json/wp/v2/posts").then(response => {
      response.data;
    });
    fetch("http://apiconsilio.local/wp-json/wp/v2/slider").then(response => {
      response.json().then(sliders => {
        this.title = sliders[0].title.rendered;
        this.slides = sliders[0];
      });
    });
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
  width: 100%;
  height: 35px;
  bottom: 10%;
}
#slider .prev,
#slider .next {
  position: absolute;
  bottom: 0px;
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
  left: 50px;
  opacity: 1;
}

#slider .next {
  left: 300px;
  margin-left: auto;
  text-indent: 2px;
}

#slider .dots {
  position: absolute;
  display: flex;
  text-align: center;
  bottom: 8px;
  left: 100px;
  &:before {
    content: "01";
    font-size: 14px;
    font-family: "Quicksand Bold";
    display: block;
    color: $primary;
    padding-right: 10px;
    margin-top: -4px;
  }
  &:after {
    content: "03";
    font-size: 14px;
    font-family: "Quicksand Bold";
    display: block;
    color: $primary;
    padding-left: 10px;
    margin-top: -4px;
  }

  li {
    width: 20px;
    height: 4px;
    background: #ffffff;
    display: inline-block;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out,
      width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.active {
      width: 50px;
      background: $primary;
      border-radius: 5px;
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
    transform: translate(-60%, -50%);
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