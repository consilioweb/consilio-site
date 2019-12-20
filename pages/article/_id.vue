<template>
  <article>
    <span>{{id}}</span>
    <h1>{{title.rendered}}</h1>
    <p>{{content.rendered}}</p>
    <nuxt-link :to="'/'">Voltar</nuxt-link>
  </article>
</template>

<script>
import axios from "axios";
export default {
  validate({ params }) {
    return !isNaN(+params.id);
  },
  async asyncData({ params, error }) {
    const { data } = await axios.get(
      `http://apiconsilio.local/wp-json/wp/v2/posts/${+params.id}`
    );
    return data;
  }
};
</script>