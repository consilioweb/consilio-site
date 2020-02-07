<template>
  <main>
    <scripts />
    <modal v-if="modal" />
    <header :colorLogo="colorLogo" :buttonHover="buttonHover" />
    <side-bar />
    <transition name="fade">
      <menu :main-menu="mainMenu" v-if="statsMainMenu" />
    </transition>
    <div class="mode-off" v-if="$nuxt.isOffline">Você está navegando no modo offline.</div>
    <parallax-container tag="section">
      <nuxt />
      <footer />
    </parallax-container>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import header from "@/components/header.vue";
import footer from "@/components/footer.vue";
import SideBar from "@/components/side-bar.vue";
import menu from "@/components/menu.vue";
import BottomPlug from "@/components/bottom-plug.vue";
import scripts from "@/components/scripts.vue";
import modal from "@/components/modal-form.vue";

export default {
  components: {
    header,
    footer,
    menu,
    SideBar,
    BottomPlug,
    scripts,
    modal
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
.mode-off {
  background: $tertiary;
  text-align: center;
  color: #fff;
  font-size: 13px;
  padding: 7px 0;
}
</style>