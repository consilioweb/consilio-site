<template>
  <client-only>
    <section class="__comments">
      <div class="fb-comments" :data-href="urlPost" data-width="auto" data-numposts="5"></div>
    </section>
  </client-only>
</template>

<script>
export default {
  name: "CommentFb",
  props: { urlPost: { type: String, required: true, default: "" } },
  mounted() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "1639900819552423",
        cookie: true,
        xfbml: true,
        version: "v4.0"
      });
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/pt_BR/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    setTimeout(() => {
      this.initCreationFacebookComments();
    }, 3000);
  },
  methods: {
    initCreationFacebookComments() {
      FB.XFBML.parse(); // Refres comments the XFBML
    }
  }
};
</script>

<style scoped>
</style>