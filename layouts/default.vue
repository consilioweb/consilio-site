<template>
  <main>
    <Scripts />
    <Modal v-if="modal" />
    <Header :colorLogo="colorLogo" :buttonHover="buttonHover" />
    <side-bar />
    <transition name="fade">
      <Menu :main-menu="mainMenu" v-if="statsMainMenu" />
    </transition>
    <div class="mode-off" v-if="$nuxt.isOffline">Você está navegando no modo offline.</div>
    <parallax-container tag="section">
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
    this.$gtm.init();
    if (this.$route.path === "/diagnostico-gratuito") {
      return this.$store.commit("TOOGLE_MODAL");
    }
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

<style lang="scss">
@import "~/assets/scss/main.scss";
@import "./assets/scss/_flexbox.scss";
@import "./assets/scss/_variables.scss";
.mode-off {
  background: $tertiary;
  text-align: center;
  color: #fff;
  font-size: 13px;
  padding: 7px 0;
}
</style>