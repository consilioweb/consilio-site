<template>
  <div class="layout">
    <amp-analytics
      config="https://www.googletagmanager.com/amp.json?id=GTM-WHQX4D3&gtm.url=SOURCE_URL"
      data-credentials="include"
    ></amp-analytics>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/amp/header";
import Footer from "@/components/amp/footer";
export default {
  components: {
    Header,
    Footer
  },
  head: {
    // script: [{ src: "" }],
  }
};
</script>
<style lang="scss">
@import "~/assets/scss/main.amp.scss";
</style>