<template>
  <main>
    <Header :colorLogo="colorLogo" :buttonHover="buttonHover" />
    <side-bar />
    <transition name="fade">
      <Menu :main-menu="mainMenu" v-if="statsMainMenu" />
    </transition>
    <parallax-container tag="section">
      <div v-if="$nuxt.isOffline">Você está navegando no modo offline.</div>
      <nuxt />
    </parallax-container>
    <Footer />
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import SideBar from "@/components/side-bar.vue";
import Menu from "@/components/menu.vue";
import BottomPlug from "@/components/bottom-plug.vue";

export default {
  components: {
    Header,
    Footer,
    Menu,
    SideBar,
    BottomPlug
  },
  computed: {
    ...mapState("menus", ["mainMenu"]),
    ...mapState(["colorLogo"]),
    ...mapState(["buttonHover"]),
    ...mapGetters({
      statsMainMenu: "menus/getStatsMainMenu",
      lengthMainMenu: "menus/lengthMainMenu"
    })
  }
};
</script>

<style scoped>
section {
  display: flex;
  position: relative;
}
</style>