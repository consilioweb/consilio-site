import Vue from 'vue'

Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

Vue.filter("stripped", param => {
  return param.replace(/<\/?[^>]+>/ig, "")
});


Vue.filter("toUrlFormat", param => {
  let temp = param.replace(/[^a-zA-Z0-9\s\-]/g, "");

  return temp.replace(/\s+/g, "-").toLowerCase();
});
