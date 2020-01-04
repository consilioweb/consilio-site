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
          @click.native="$store.commit('menus/CLOSE_MAIN_MENU')"
          :to="item.url"
        >
          <li class="menu__title">
            <span>{{ item.title }}</span>

            <div class="perspective">
              <span class="render">i</span>
              <span class="render shadow">-</span>
            </div>
          </li>
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
.menu {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (min-width: $break-md) {
  }
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
  @include flex-direction(column);
  margin: 0 auto;
  width: 100vw;
  height: 80vh;
  padding: 0 5%;
  counter-reset: item;
  position: relative;
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
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
  padding: 0px 20px;
  z-index: 10;
  @include flexbox;
  @include align-items(center);
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  counter-increment: item;
  & span {
    z-index: 12;
  }
  &:hover {
    text-shadow: 4px 4px 11px rgba(150, 150, 150, 0.55);
    color: $white;
    background: $secondary;
    opacity: 0.7;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
  }
  &:hover .perspective {
    opacity: 1;
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

//Perspective symbol consilio
.perspective {
  opacity: 0;
  align-self: center;
  width: 70px;
  -moz-perspective: 900px;
  -webkit-perspective: 900px;
  perspective: 900px;
  position: absolute;
  top: 30%;
  right: 50px;
  z-index: 11;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  transform: scale(0.8);
}

.render {
  display: inline-block;
  z-index: 0;
  left: 40px;
  position: relative;
  line-height: 0.55em;
  height: 0.5em;
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  font-family: "GothamPro", sans-serif;
  font-size: 22em;
  font-style: italic;
  font-weight: 700;
  transform: rotate(-180deg) rotateY(30deg);
  color: #f5f5f5;
  animation: reflect 2s infinite alternate ease-in-out;
  text-shadow: white 0.006em 0.006em 1px, rgba(0, 0, 0, 0.15) -3px 7px 10px,
    #d0d0d0 -1px 1px 1px, #d0d0d0 -2px 1px 1px, #d0d0d0 -3px 1px 1px,
    #d0d0d0 -4px 1px 1px, #d0d0d0 -5px 1px 1px, #d0d0d0 -6px 1px 1px,
    #d0d0d0 -7px 1px 1px, #d0d0d0 -8px 1px 1px, #d0d0d0 -9px 1px 1px,
    #d0d0d0 -10px 1px 1px, #d0d0d0 -11px 1px 1px, #d0d0d0 -12px 1px 1px,
    rgba(255, 255, 255, 0.6) -5px 2px 100px;
}
@keyframes reflect {
  0% {
    transform: rotate(-180deg) rotateY(30deg);
  }
  100% {
    transform: rotate(-180deg) rotateY(0deg);
  }
}

.render.reflect {
  z-index: 0;
  opacity: 0.4;
  -moz-transform: rotateX(180deg) rotateY(-30deg);
  -webkit-transform: rotateX(180deg) rotateY(-30deg);
  transform: rotateX(180deg) rotateY(-30deg);
}
.render.shadow {
  opacity: 0.3;
  z-index: -1;
  color: transparent;
  letter-spacing: -0.02em;
  position: absolute;
  top: 0.46em;
  left: 0em;
  -moz-transform-origin: 0 0 50%;
  -ms-transform-origin: 0 0 50%;
  -webkit-transform-origin: 0 0 50%;
  transform-origin: 0 0 50%;
  -moz-transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  -webkit-transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  text-shadow: rgba(0, 0, 0, 0.8) 0 0 30px, rgba(0, 0, 0, 0.8) 0 0 80px,
    black 0 0 150px, black 0 0 150px, black 0 0 250px, black 0 0 250px,
    white -0.15em 0.4em 250px;
}
</style>