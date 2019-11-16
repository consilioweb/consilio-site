<template>
  <section class="menu-side">
    <div class="icon-menu">
      <n-link to="#" prefetch>
        <button class="btn-burger open-nav-main">
          Menu
          <span class="l1"></span>
          <span class="l2"></span>
          <span class="l3"></span>
        </button>
      </n-link>
    </div>
    <div class="aside-social">
      <n-link to="#" class="item-social" prefetch>
        <facebook-icon />
      </n-link>
      <n-link to="#" class="item-social" prefetch>
        <instagram-icon />
      </n-link>
      <n-link to="#" class="item-social" prefetch>
        <twitter-icon />
      </n-link>
      <n-link to="#" class="item-social" prefetch>
        <youtube-icon />
      </n-link>
      <n-link to="#" class="item-social" prefetch>
        <linkedin-icon />
      </n-link>
    </div>
  </section>
</template>

<style>
</style>
<script>
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
  }
};
</script>