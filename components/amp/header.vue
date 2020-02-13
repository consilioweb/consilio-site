<template>
  <header class="header">
    <div class="logo">
      <n-link to="/">
        <svg-icon name="logo" height="25" width="158" />
      </n-link>
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