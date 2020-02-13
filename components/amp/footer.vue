<template>
  <footer class="footer">
    <ul>
      <li>
        <n-link :to="'/amp/blog/'+ prev">
          <svg-icon name="icons/left-arrow" height="20" width="20" />
        </n-link>
      </li>
      <li>
        <a
          target="_blank"
          :href="`http://facebook.com/share.php?display=popup&amp;u=${urlPost}&t=${post.title}`"
        >
          <svg-icon name="icons/facebook" height="15" width="15" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          :href="`https://www.linkedin.com/shareArticle?mini=true&url=${urlPost}&title=${post.title}`"
        >
          <svg-icon name="icons/linkedin" height="15" width="15" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          :href="`http://twitter.com/home?status=Agência Consilio - ${post.title} - ${urlPost}`"
        >
          <svg-icon name="icons/twitter" height="15" width="15" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          :href="`https://web.whatsapp.com/send?text=*${post.title}*%20-%20*Leia%20Mais:*%20${urlPost}`"
        >
          <svg-icon name="icons/whatsapp" height="15" width="15" />
        </a>
      </li>
      <li>
        <n-link :to="'/amp/blog/'+ next">
          <svg-icon name="icons/right-arrow" height="20" width="20" />
        </n-link>
      </li>
    </ul>
  </footer>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      disabledNext: "",
      disabledPrev: ""
    };
  },
  computed: {
    urlPost() {
      return process.env.BASE_URL + "amp/blog/" + this.post.slug;
    },
    next() {
      if (this.post.next) {
        return this.post.next.slug;
      } else {
        return this.post.slug;
      }
    },
    prev() {
      if (this.post.previous) {
        return this.post.previous.slug;
      } else {
        return this.post.slug;
      }
    },
    ...mapState("posts", ["post"]),
    ...mapState("core", ["info"])
  }
};
</script>
<style scoped>
</style>