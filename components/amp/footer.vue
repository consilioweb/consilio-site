<template>
  <footer class="footer">
    <ul>
      <li>
        <svg-icon name="icons/left-arrow" height="20" width="20" />
      </li>
      <li>
        <a :href="'https://fb.com/'+info.facebook">
          <svg-icon name="icons/facebook" height="15" width="15" />
        </a>
      </li>
      <li>
        <a :href="'https://fb.com/'+info.instagram">
          <svg-icon name="icons/instagram" height="15" width="15" />
        </a>
      </li>
      <li>
        <a :href="'https://fb.com/'+info.linkedin">
          <svg-icon name="icons/linkedin" height="15" width="15" />
        </a>
      </li>
      <li>
        <svg-icon name="icons/twitter" height="15" width="15" />
      </li>
      <li>
        <a :href="info.instagram">
          <svg-icon name="icons/right-arrow" height="20" width="20" />
        </a>
      </li>
    </ul>
  </footer>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("posts", ["post"]),
    ...mapState("core", ["info"])
  }
};
</script>
<style scoped>
</style>