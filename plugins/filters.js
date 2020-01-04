import Vue from "vue";

Vue.filter("stripped", param => {
  if (!param) return "";
  return param.replace(/<\/?[^>]+(>|$)/g, "");
});
Vue.filter("toUrlFormat", param => {
  let temp = param.replace(/[^a-zA-Z0-9\s\-]/g, "");
  return temp.replace(/\s+/g, "-").toLowerCase();
});
