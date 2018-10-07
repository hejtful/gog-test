<template>
  <div class="card">
    <img class="card-img" :src="require(`../assets/${image}.jpg`)"/>
    <div class="card-info">
      <h5 class="card-title">{{ name }}</h5>
      <div class="card-labels">
        <span v-if="discount" class="card-label discount">{{ `-${discount}%` }}</span>
        <span v-if="inCart" class="card-label">IN CART</span>
        <button v-else @click="addToCart" class="card-label clickable">{{ `$${price}` }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    image: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    discount: {
      type: Number,
      required: false
    },

    id: {
      type: Number,
      required: true
    }
  },

  computed: {
    inCart() {
      return this.$store.getters.isInCart(this.id);
    }
  },

  methods: {
    addToCart() {
      this.$store.commit("addToCart", {
        image: this.image,
        name: this.name,
        price: this.price,
        id: this.id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";

.card {
  background-color: #dedede;
  box-shadow: $box-shadow;
  height: 185px;
  overflow: hidden;
  width: 196px;

  &:not(:last-child) {
    margin-right: 20px;
  }
}

.card-img {
  display: block;
  height: 110px;
}

.card-info {
  height: 55px;
  padding: 10px;
  position: relative;
}

.card-title {
  margin: 0;
}

.card-labels {
  bottom: 10px;
  position: absolute;
  right: 10px;
}

.card-label {
  color: #404040;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  padding: 5px;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &.discount {
    background-color: #00905e;
    border: 1px solid #00905e;
    color: #fff;
  }

  &.clickable {
    cursor: pointer;
  }
}
</style>
