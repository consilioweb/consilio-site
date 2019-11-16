<template>
  <main class="wrapper">
    <top-bar />
    <side-menu />
    <div v-if="$nuxt.isOffline">Você está navegando no modo offline.</div>
    <nuxt />
  </main>
</template>

<script>
import SideMenu from "@/components/Side-menu.vue";
import TopBar from "@/components/Top-bar.vue";
import BottomPlug from "@/components/Bottom-plug.vue";
export default {
  components: {
    SideMenu,
    TopBar,
    BottomPlug
  }
};
</script>