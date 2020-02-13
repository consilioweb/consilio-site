<template>
  <header class="header">
    <div class="logo">
      <a href="/">
        <svg-icon name="logo" height="25" width="158" />
      </a>
    </div>
    <div class="nav">
      <Menu />
    </div>
  </header>
</template>
<script>
import Menu from "@/components/amp/menu";
export default {
  components: {
    Menu
  }
};
</script>
<style scoped>
</style>