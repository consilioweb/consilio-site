<template>
  <div id="open-menu" class="menu-overlay">
    <nuxt-link to @click.native="$store.commit('menus/CLOSE_MAIN_MENU')">
      <div class="menu__close">
        <p>fechar menu</p>
      </div>
    </nuxt-link>
    <nav class="menu">
      <ul class="menu__content">
        <n-link
          v-for="(item, index) in mainMenu"
          :key="index"
          @mouseover.native="getOver(item.title)"
          class="menu__title--link"
          @click.native="$store.commit('menu/CLOSE')"
          :to="item.url"
        >
          <li class="menu__title">{{ item.title }}</li>
        </n-link>
        <div class="menu__title--bg">{{itemOver}}</div>
      </ul>
    </nav>
    <div class="menu__footer">
      <div class="menu__col menu__col--vuoto"></div>
      <div class="menu__col">
        <a href="/privacidade">Privacidade</a>
      </div>
      <div class="menu__col">
        <a href="/cookies">Cookies</a>
      </div>
      <div class="menu__col">
        <a href="/creditos" target="_blank">Creditos</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["mainMenu"],
  data() {
    return {
      itemOver: ""
    };
  },
  methods: {
    getOver(item) {
      this.itemOver = item;
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@import "./assets/scss/_reset.scss";
@import "./assets/scss/_fonts.scss";
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";

.menu {
  position: fixed;
  width: 100%;
  height: calc(100vh - 140px);
  margin-top: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
}
.menu__close {
  font-size: 12px;
  font-family: Quicksand, sans-serif;
  font-weight: 500;
  margin: 0;
  color: $primary;
  position: fixed;
  right: 41px;
  top: 110px;
  width: 80px;
  transform-origin: 50% 50%;
  -ms-transform: translate(50%, 50%) rotate(-90deg);
  -webkit-transform: translate(50%, 50%) rotate(-90deg);
  transform: translate(50%, 50%) rotate(-90deg);
  z-index: 99999;
}
.menu__content {
  @include flexbox;
  @include justify-content(space-between);
  @include flex-wrap(wrap);
  margin: 0 auto;
  width: 100vw;
  height: 100%;
  padding: 0 5%;
  counter-reset: item;
  @media screen and (max-width: $break-lg) {
    @include flex-direction(column);
    height: 70%;
  }
}
.menu__title {
  position: relative;
  color: $primary;
  font-size: 30px;
  font-family: Montserrat;
  font-weight: 800;
  text-transform: lowercase;
  height: 100%;
  padding: 0px 30px;
  z-index: 10;
  @include flexbox;
  @include align-items(center);
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  counter-increment: item;
  &:hover {
    color: $white;
    background: $secondary;
    opacity: 0.7;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
  }
  &:after {
    content: "0" counter(item);
    font-family: Quicksand, sans-serif;
    font-size: 13px;
    font-weight: 800;
    margin-top: -20px;
    left: 20px;
    position: absolute;
    @include flexbox;
  }
  &:hover:after {
    color: $white;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
  }
  @media screen and (max-width: $break-lg) {
    height: 70px;
  }
}
.menu__title--bg {
  font-family: Montserrat, sans-serif;
  width: 100%;
  text-align: center;
  font-size: 13.5vw;
  color: rgba(71, 84, 93, 0.1);
  position: absolute;
  top: calc(50% + 3vw);
  opacity: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  @media screen and (max-width: $break-sm) {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: translate(38%, 10%) rotate(-90deg);
    transform: translate(38%, 10%) rotate(-90deg);
    font-size: 20vw;
  }
}
.menu__title--link:hover ~ .menu__title--bg {
  opacity: 0.3 !important;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  left: 0;
}

.menu__footer {
  position: fixed;
  top: calc(100vh - 70px);
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  @media screen and (max-width: $break-sm) {
    @include justify-content(flex-end);
    margin-right: 5%;
  }
}

.menu__footer .menu__col {
  font-size: 14px;
  font-family: Quicksand, sans-serif;
  cursor: default;
  width: auto;
}
@media screen and (max-width: $break-sm) {
  .menu__footer .menu__col:last-child {
    padding-right: 30px;
  }
}
.menu__footer .menu__col a {
  text-decoration: none;
  color: $tertiary;
  font-size: 12px;
  font-weight: 500;
  &:after {
    content: "";
    position: absolute;
    width: 0px;
    height: 2px;
    border-radius: 5px;
    background: $tertiary;
    display: block;
    transition: width 0.4s ease;
    -webkit-transition: width 0.4s ease;
    transition: width 0.4s ease;
    -webkit-transition: width 0.4s ease;
  }
  &:hover:after {
    width: 100%;
  }
}

.menu-overlay {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  right: 0;
  background-color: #fff;
  z-index: 99999;
  align-items: center;
  justify-content: center;
}

.hidden {
  overflow-y: hidden;
}

.menu__bg,
.menu__col {
  font-family: Montserrat, sans-serif;
  position: relative;
  width: 14%;
  margin: 0 1.5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-size: 2vw;
  transition: background 0.5s ease-in-out;
  cursor: pointer;
  mix-blend-mode: multiply;
}

.menu__col::before {
  font-size: 14px;
  margin-top: -1.8vw;
  font-family: Quicksand, sans-serif;
}

.menu__col span {
  font-family: Montserrat, sans-serif;
  content: ">";
  width: 40px;
  position: absolute;
  top: calc(33% + 4vw);
  right: 20px;
  opacity: 0;
}
</style>