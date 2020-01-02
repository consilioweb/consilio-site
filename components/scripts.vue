<template>
  <section class="scripts">
    <div v-html="info.others_scripts"></div>
    <div v-html="info.google_analitycs"></div>
    <div v-html="info.google_tag_manager"></div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("core", ["info"])
  }
};
</script>

<style lang="scss" scoped>
</style>