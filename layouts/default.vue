<template>
  <main>
    <Header />
    <transition name="fade">
      <menu-full v-if="this.getMenuStats"></menu-full>
    </transition>
    <side-menu />
    <div v-if="$nuxt.isOffline">Você está navegando no modo offline.</div>
    <nuxt />
  </main>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import RegisterStoreModule from "@/mixins/RegisterStoreModule";
import menuModule from "@/store/menu";
import Header from "@/components/Header.vue";
import SideMenu from "@/components/Side-menu.vue";
import MenuFull from "@/components/Menu-full.vue";
import BottomPlug from "@/components/Bottom-plug.vue";

export default {
  mixins: [RegisterStoreModule],
  created() {
    this.registerStoreModule("menu", menuModule);
  },
  computed: {
    ...mapGetters({
      getMenuStats: "menu/getMenuStats"
    })
  },
  components: {
    Header,
    MenuFull,
    SideMenu,
    BottomPlug
  }
};
</script>

<style scoped>
</style>