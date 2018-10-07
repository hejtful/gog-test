<template>
  <main class="main">
    <h4>GAME OF THE WEEK</h4>
    <div class="jumbo">
      <img class="jumbo-img" src="../assets/bg.jpg"/>
      <button class="secret-button">A SECRET BUTTON THAT YOU SHOULD TOTALLY IMPLEMENT</button>
    </div>
    <section class="cards">
      <Card v-for="card in cards" :key="card.id" v-bind="card"/>
    </section>
  </main>
</template>

<script>
import Card from "./Card.vue";
import cards from "../mocked-data/cards.js";

export default {
  name: "Main",

  data: () => ({
    cards
  }),

  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";

.main {
  margin: 0 auto;
  width: 1060px;
}

.jumbo {
  box-shadow: $box-shadow;
  margin: 20px 0;
  position: relative;
}

.jumbo-img {
  display: block;
  position: relative;
  z-index: 1;
}

.secret-button {
  @include big-round-button(
    linear-gradient(to bottom, #00c78c 0%, #00915f 100%),
    linear-gradient(to top, #00c78c 0%, #00915f 100%),
    #258363
  );
  left: calc(50% - 400px / 2);
  position: absolute;
  top: calc(50% - #{$big-button-height} / 2);
  width: 400px;
  z-index: 0;
}

.cards {
  display: flex;
}
</style>
