<template>
  <header>
    <div class="logo">
      <n-link to="/">
        <svg-icon name="logo" :style="'color:'+colorLogo" width="200" height="40" />
      </n-link>
    </div>
    <div class="button-top">
      <button :class="{ hover: buttonHover }">Diagnóstico Gratuito</button>
    </div>
  </header>
</template>
<script>
export default {
  props: ["colorLogo", "buttonHover"],
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";
header {
  height: 70px;
  position: absolute;
  margin: 10% 5%;
  @include flexbox;
  @include justify-content(space-around);
  width: -webkit-fill-available;
  z-index: 99;
  @media screen and (min-width: $break-md) {
    margin: 5% 13% 10% 10%;
  }
}
header .logo {
  @include flexbox;
  flex: 1;
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
  background: transparent;
  color: $white;
  transition: all 0.3s ease;
  font-family: "Quicksand";
  font-weight: 700;
  &:hover {
    background: $white;
    color: $secondary;
  }
  @media screen and (min-width: $break-md) {
    width: 150px;
  }
  @media screen and (min-width: $break-lg) {
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