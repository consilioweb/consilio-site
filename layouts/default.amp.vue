<template>
  <div class="layout">
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
  }
};
</script>
<style lang="scss">
@import "~/assets/scss/main.amp.scss";
</style>