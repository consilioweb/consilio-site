import Vue from "vue";
import VueLazyload from "vue-lazyload";

//import error from "../assets/error.svg";
import loading from "../assets/svg/loading.svg";

Vue.use(VueLazyload, {
  preLoad: 1,
  src: "https://via.placeholder.com/300/000000/FFFFFF/?text=consilio",
  error: "https://via.placeholder.com/300/000000/FFFFFF/?text=consilio",
  loading: loading,
  attempt: 3,
  lazyComponent: true,
  observer: true
});
