<template>
  <div id="side-bar">
    <div class="icon-menu" :class="this.getStatsMainMenu ? 'activeC' : ''">
      <button
        @click="$store.commit('menus/TOGGLE_STATS_MAIN_MENU')"
        :class="this.getStatsMainMenu ? 'active' : ''"
        class="btn-burger open-nav-main"
      >
        menu
        <span class="l1"></span>
        <span class="l2"></span>
        <span class="l3"></span>
      </button>
      <p>menu</p>
    </div>
    <div class="menu-side">
      <div class="aside-social">
        <n-link to="#" class="item-social">
          <facebook-icon />
        </n-link>
        <n-link to="#" class="item-social">
          <instagram-icon />
        </n-link>
        <n-link to="#" class="item-social">
          <twitter-icon />
        </n-link>
        <n-link to="#" class="item-social">
          <youtube-icon />
        </n-link>
        <n-link to="#" class="item-social">
          <linkedin-icon />
        </n-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import TwitterIcon from "vue-material-design-icons/Twitter.vue";
import YoutubeIcon from "vue-material-design-icons/Youtube.vue";
import LinkedinIcon from "vue-material-design-icons/Linkedin.vue";
export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon
  },
  computed: {
    ...mapGetters({
      getStatsMainMenu: "menus/getStatsMainMenu"
    })
  }
};
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";

.menu-side {
  position: fixed;
  bottom: 0;
  right: inherit;
  left: inherit;
  height: 40px;
  width: 100%;
  padding: 10px;
  background: $white;
  @include flexbox;
  @include flex-direction(row-reverse);
  @include align-items(center);
  @include justify-content(flex-end);
  z-index: 10;
  @media screen and (min-width: $break-md) {
    width: 30px;
    height: 100%;
    right: 0;
    padding: 50px 20px 50px 20px;
    @include align-items(flex-end);
    @include justify-content(center);
  }
  @media screen and (min-width: $break-lg) {
    width: 40px;
  }
}
.aside-social {
  @include flexbox;
  @include flex-direction(column);
  @media screen and (max-width: $break-md) {
    padding: 0px;
    @include flex-direction(row);
    padding-right: 10%;
  }
}
.aside-social svg {
  fill: $tertiary;
  width: 16px;
  @media screen and (max-width: $break-md) {
    padding-left: 10px;
    vertical-align: middle;
  }
}

.icon-menu {
  position: fixed;
  flex: 1;
  right: 30px;
  bottom: 8px;
  top: initial;
  @include justify-content(center);
  z-index: 999999;
  & p {
    opacity: 0;
    position: absolute;
    right: 13px;
    -ms-transform: translate(50%, 50%) rotate(-90deg);
    -webkit-transform: translate(50%, 50%) rotate(-90deg);
    transform: translate(50%, 50%) rotate(-90deg);
    transition: opacity 800ms ease-in-out;
    color: $tertiary;
  }
  &:not(.activeC) p {
  }
  &:not(.activeC):hover p {
    opacity: 1;
  }
  &.activeC {
    top: 50px;
    right: 27px;
    left: inherit;
  }
  @media screen and (min-width: $break-md) {
    top: 50px;
    right: 23px;
    left: inherit;
  }
  @media screen and (min-width: $break-lg) {
    right: 27px;
  }
}
.icon-menu .btn-burger {
  z-index: 20;
  width: 25px;
  height: 40px;
  text-indent: -9999px;
  font: normal 10px/27px "f-Regular", Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
  color: $primary;
  text-transform: uppercase;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}

.icon-menu .btn-burger span {
  display: block;
  position: absolute;
  right: 0;
  top: 18px;
  width: 15px;
  height: 2px;
  background: $primary;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-transition: -webkit-transform 0.2s
      cubic-bezier(0.175, 0.885, 0.32, 1.275),
    width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.1s linear,
    left 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.1s linear,
    left 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.icon-menu .btn-burger .l1 {
  width: 25px;
  margin-top: -7px;
}

.icon-menu .btn-burger .l3 {
  width: 18px;
  margin-top: 7px;
}

.icon-menu .btn-burger:not(.active):hover span {
  width: 22px;
}

@media only screen and (max-width: 1023px) {
  .icon-menu .btn-burger {
    text-indent: -9999px;
    width: 30px;
  }
}

.icon-menu .btn-burger.active .l1 {
  transform: translateY(10px) translateY(-50%) rotate(-45deg);
  margin-top: -11px;
  height: 3px;
}

.icon-menu .btn-burger.active .l2 {
  opacity: 0;
}

.icon-menu .btn-burger.active .l3 {
  transform: translateY(-10px) translateY(50%) rotate(45deg);
  margin-left: 0;
  width: 100%;
  margin-top: 6px;
  height: 3px;
  @media only screen and (max-width: $break-lg) {
    width: 26px;
  }
}
</style>