<template>
  <main>
    <Header />
    <side-bar />
    <transition name="fade">
      <Menu :main-menu="mainMenu" v-if="statsMainMenu" />
    </transition>
    <parallax-container>
      <div v-if="$nuxt.isOffline">Você está navegando no modo offline.</div>
      <nuxt />
    </parallax-container>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Header from "@/components/header.vue";
import SideBar from "@/components/side-bar.vue";
import Menu from "@/components/menu.vue";
import BottomPlug from "@/components/bottom-plug.vue";

export default {
  components: {
    Header,
    Menu,
    SideBar,
    BottomPlug
  },
  computed: {
    ...mapState("menus", ["mainMenu"]),
    ...mapGetters({
      statsMainMenu: "menus/getStatsMainMenu",
      lengthMainMenu: "menus/lengthMainMenu"
    })
  }
};
</script>

<style scoped>
</style>