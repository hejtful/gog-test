<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",

  components: {
    Header,
    Main
  }
};
</script>

<style lang="scss">
* {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
}

body {
  background-color: #c2c1c2;
  margin: 0;
}

h4 {
  color: #1a1a1a;
  font-size: 15px;
  font-weight: 700;
  margin: 0;
}

h5 {
  color: #212121;
  font-size: 14px;
}
</style>
