<template>
  <header class="header">
      <div class="header-content">
        <img class="logo" src="../assets/logo.png">
        <Cart/>
      </div>
  </header>
</template>

<script>
import Cart from "./Cart.vue";

export default {
  name: "Header",

  components: {
    Cart
  }
};
</script>

<style scoped lang="scss">
@import "../styles/settings.scss";

.header {
  background: linear-gradient(to bottom, #efefef 0%, #dedede 100%);
  box-shadow: $box-shadow;
  margin-bottom: 40px;
}

.header-content {
  align-items: center;
  display: flex;
  margin: 0 auto;
  height: $header-height;
  width: 1060px;
}
</style>
