import Vue from "vue";
import vTinySlider from "vue-tiny-slider";
const VueTinySlider = {
  install(Vue, options) {
    Vue.component("carousel", vTinySlider);
  }
};
Vue.use(VueTinySlider);
