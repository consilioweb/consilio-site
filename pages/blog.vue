<template>
  <section>
    <posts :posts="posts" :length="lengthPosts" />
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import posts from "@/components/blog/posts.vue";

export default {
  components: {
    posts
  },
  computed: {
    ...mapState("posts", ["posts"]),
    ...mapGetters({
      lengthPosts: "posts/lengthPosts"
    })
  }
};
</script>

<style lang="scss" scoped>
</style>

<router>
  {
    path: '/blog',
    alias: [
      '/explorar',
      '/posts'
    ]
  }
</router>