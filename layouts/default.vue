<template>
  <main>
    <Scripts />
    <Modal v-if="modal" />
    <Header :colorLogo="colorLogo" :buttonHover="buttonHover" />
    <side-bar />
    <transition name="fade">
      <Menu :main-menu="mainMenu" v-if="statsMainMenu" />
    </transition>
    <parallax-container tag="section">
      <div v-if="$nuxt.isOffline">Você está navegando no modo offline.</div>
      <nuxt />
      <Footer />
    </parallax-container>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import SideBar from "@/components/side-bar.vue";
import Menu from "@/components/menu.vue";
import BottomPlug from "@/components/bottom-plug.vue";
import Scripts from "@/components/scripts.vue";
import Modal from "@/components/modal-form.vue";

export default {
  middleware: "mautic",
  components: {
    Header,
    Footer,
    Menu,
    SideBar,
    BottomPlug,
    Scripts,
    Modal
  },
  computed: {
    ...mapState("menus", ["mainMenu"]),
    ...mapState(["colorLogo"]),
    ...mapState(["buttonHover"]),
    ...mapState(["modal"]),
    ...mapGetters({
      statsMainMenu: "menus/getStatsMainMenu",
      lengthMainMenu: "menus/lengthMainMenu"
    }),
    fetchMsgGet() {
      var query = location.search.slice(1);
      var partes = query.split("&");
      var data = {};
      partes.forEach(function(parte) {
        var chaveValor = parte.split("=");
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
      });
      return data;
    }
  },
  mounted() {
    if (this.$route.path === "/diagnostico-gratuito") {
      return this.$store.commit("TOOGLE_MODAL");
    }
    if ("serviceWorker" in navigator && !navigator.serviceWorker.controller) {
      navigator.serviceWorker.register("/OneSignalSDKWorker.js");
    }
    this.$OneSignal.push(() => {
      this.$OneSignal.isPushNotificationsEnabled(isEnabled => {
        if (isEnabled) {
          console.log("Push notifications are enabled!");
        } else {
          console.log("Push notifications are not enabled yet.");
        }
      });
    });
  },
  watch: {
    "$route.path": function() {
      if (this.$route.path === "/diagnostico-gratuito") {
        return this.$store.commit("TOOGLE_MODAL");
      }
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  position: relative;
  flex-direction: column;
}
</style>