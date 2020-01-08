export default function() {
  if (!process.server) {
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
  }
}
