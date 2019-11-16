<template>
  <section>
    <article>
      <h1>Posts Blog</h1>
      <div class="grid">
        <ul>
          <li v-for="(article, id) in articles" :key="id" class="item">
            <nuxt-link :to="'/article/' + article.id">{{ article.title.rendered }}</nuxt-link>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<style scoped>
</style>
<script>
import axios from "axios";
export default {
  async asyncData() {
    const { data } = await axios.get(
      "http://apiconsilio.local/wp-json/wp/v2/posts"
    );
    return {
      articles: data
    };
  }
};
</script>