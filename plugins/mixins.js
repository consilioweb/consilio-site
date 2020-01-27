import Vue from "vue";

Vue.mixin({
  methods: {
    /**
     * Returns formatted date depending on how old it is.
     * If older than 6 days, return formatted like '2 days ago',
     * otherwise return formatted like 'Aug 2'.
     * @param {String} date
     * @return {String} formatted date
     */
    shortTimestamp(date) {
      let article = this.$moment(date);
      let today = this.$moment(new Date());

      if (today.diff(article) > 518400000) {
        return article.format("D MMM");
      } else {
        return article.fromNow();
      }
    },
    /**
     * Returns date formatted like 'May 9, 2017'
     * @param {String} date
     * @return {String} formatted date
     */
    longTimestamp(date) {
      return this.$moment(date)
        .locale("pt-br")
        .format("D [de] MMMM [de] YYYY");
    },

    /**
     * Returns filter caracteres in after ...
     * @param {String} date
     * @return {String} formatted date
     */
    toLimitChars(string = "", chars) {
      return string.substring(0, chars) + "...";
    },

    homeScrollTop() {
      if (window.location.pathname === "/") {
        this.$scrollTo(document, 500);
      } else {
        this.$router.push("/");
      }
    }
  }
});
