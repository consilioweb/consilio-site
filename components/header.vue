<template>
  <header>
    <div class="logo">
      <n-link to="/">
        <img src="@/assets/img/logo.svg" alt="logo" />
      </n-link>
    </div>
    <div class="button-top">
      <button>Diagnóstico Gratuito</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "./assets/scss/_reset.scss";
@import "./assets/scss/_fonts.scss";
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";

header {
  top: 50px;
  left: 0;
  height: 70px;
  width: 100vw;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: rgba(255, 255, 255, 0);
  z-index: 9;
  box-sizing: border-box;
}
header img {
  height: 30px;
}
header .button-top {
  margin-right: 0;
  @media screen and (min-width: $break-sm) {
    margin-right: 15%;
  }
  @media screen and (min-width: $break-md) {
    margin-right: 10%;
  }
  @media screen and (min-width: $break-lg) {
    margin-right: 10%;
  }
  @media screen and (min-width: $break-xl) {
    margin-right: 10%;
  }
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
  @media screen and (min-width: $break-xl) {
    width: 180px;
  }
}
</style>