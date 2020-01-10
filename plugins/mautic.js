import vue from "vue";

(function(w, d, t, u, n, a, m) {
  w["MauticTrackingObject"] = n;
  (w[n] =
    w[n] ||
    function() {
      (w[n].q = w[n].q || []).push(arguments);
    }),
    (a = d.createElement(t)),
    (m = d.getElementsByTagName(t)[0]);
  a.async = 1;
  a.src = u;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://automacao.consilio.com.br/mtc.js",
  "mt"
);

mt("send", "pageview");

vue.prototype.$initMautic = () => {
  if (typeof MauticSDKLoaded == "undefined") {
    var MauticSDKLoaded = true;
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://automacao.consilio.com.br/media/js/mautic-form.js";
    script.onload = function() {
      MauticSDK.onLoad();
    };
    head.appendChild(script);
    var MauticDomain = "https://automacao.consilio.com.br";
    var MauticLang = {
      submittingMessage: "Por favor, aguarde..."
    };
  }
};
