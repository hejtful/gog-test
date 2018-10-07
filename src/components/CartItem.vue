<template>
  <div class="cart-item">
    <img class="cart-item-img" :src="require(`../assets/${image}.jpg`)"/>
    <div>
      <h5 class="cart-item-title">{{ name }}</h5>
      <button class="remove-button" @click="removeFromCart(id)">Remove</button>
    </div>
    <span class="cart-item-price">{{ `$${price}` }}</span>
  </div>
</template>

<script>
export default {
  name: "CartItem",

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

    id: {
      type: Number,
      required: true
    }
  },

  methods: {
    removeFromCart(id) {
      this.$store.commit("removeFromCart", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
  align-items: center;
  display: flex;
  padding: 5px 10px 5px 5px;

  &:not(:last-child) {
    border-bottom: 1px solid #e4e4e4;
  }
}

.cart-item-img {
  margin-right: 10px;
  width: 100px;
}

.cart-item-title {
  margin: 0;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.remove-button {
  background: transparent;
  border: 0;
  color: #212121;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  outline: 0;
  padding: 0;
  text-decoration: underline;
  visibility: hidden;

  .cart-item:hover & {
    visibility: visible;
  }
}

.cart-item-price {
  margin-left: auto;
}
</style>
