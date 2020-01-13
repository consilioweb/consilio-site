<template>
  <header>
    <div class="logo">
      <n-link to="/">
        Agência Consilio
        <svg-icon name="logo" :style="'color:'+colorLogo" width="180" height="40" />
      </n-link>
    </div>
    <div class="button-top">
      <button
        @click="$store.commit('TOOGLE_MODAL')"
        :class="{ hover: buttonHover }"
      >Diagnóstico Gratuito</button>
    </div>
  </header>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["colorLogo", "buttonHover"],
  computed: {
    ...mapState(["modal"])
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  position: absolute;
  margin: 10% 5%;
  @include flexbox;
  @include justify-content(space-around);
  width: -webkit-fill-available;
  z-index: 96;
  @media screen and (min-width: $break-md) {
    margin: 5% 13% 10% 10%;
  }
}
header .logo {
  @include flexbox;
  flex: 1;
  font-size: 0px;
}
header .button-top {
  @include flexbox;
  flex: 1;
  @include justify-content(flex-end);
}
header button {
  height: 40px;
  width: 135px;
  text-transform: lowercase;
  border-radius: 3px;
  border: 1px solid $white;
  background: $secondary;
  color: $white;
  transition: all 0.3s ease;
  font-family: "Quicksand";
  font-weight: 700;
  font-size: 10px;
  &:hover {
    background: $white;
    color: $secondary;
  }
  @media screen and (min-width: $break-md) {
    font-size: 12px;
    width: 150px;
  }
  @media screen and (min-width: $break-lg) {
    font-size: 12px;
    width: 180px;
  }
}
.hover {
  background: $white;
  color: $secondary;
}
.hover:hover {
  border: 2px solid $secondary;
  background: $white;
  color: $secondary;
}
</style>