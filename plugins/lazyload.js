import Vue from "vue";
import VueLazyload from "vue-lazyload";

//import error from "../assets/error.svg";
import loading from "../assets/svg/loading.svg";

Vue.use(VueLazyload, {
  preLoad: 1,
  //error: error,
  loading: loading,
  attempt: 3,
  lazyComponent: true,
  observer: true,
});
