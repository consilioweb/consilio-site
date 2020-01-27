import Vue from "vue";

Vue.filter("stripped", param => {
  if (!param) return "";
  return param.replace(/<\/?[^>]+(>|$)/g, "");
});
Vue.filter("toUrlFormat", param => {
  var map = {
    â: "a",
    Â: "A",
    à: "a",
    À: "A",
    á: "a",
    Á: "A",
    ã: "a",
    Ã: "A",
    ê: "e",
    Ê: "E",
    è: "e",
    È: "E",
    é: "e",
    É: "E",
    î: "i",
    Î: "I",
    ì: "i",
    Ì: "I",
    í: "i",
    Í: "I",
    õ: "o",
    Õ: "O",
    ô: "o",
    Ô: "O",
    ò: "o",
    Ò: "O",
    ó: "o",
    Ó: "O",
    ü: "u",
    Ü: "U",
    û: "u",
    Û: "U",
    ú: "u",
    Ú: "U",
    ù: "u",
    Ù: "U",
    ç: "c",
    Ç: "C"
  };
  //const removeAcentos = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  let temp = param.replace(/[^a-zA-Z0-9\s\-]/g, "");
  return temp.replace(/\s+/g, "-").toLowerCase();
});
