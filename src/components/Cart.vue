<template>
  <div class="cart">
    <button class="cart-button" :class="{active}" @click="toggleCart">
      <img class="cart-icon" src="../assets/cart.png"/> {{ items.length }}
    </button>
    <div class="cart-dropdown" v-show="active">
      <div class="cart-info">
        <h4>{{ items.length}} ITEMS IN CART</h4>
        <h4 class="total-price">{{ `$${totalPrice}` }}</h4>
        <button class="clear-button" @click="clearCart">CLEAR CART</button>
      </div>
      <div v-if="items.length" class="cart-items">
        <CartItem v-for="item in items" :key="item.id" v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";

export default {
  name: "Cart",

  data: () => ({
    active: false
  }),

  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice;
    },

    items() {
      return this.$store.getters.cartItems;
    }
  },

  methods: {
    toggleCart() {
      this.active = !this.active;
    },

    clearCart() {
      this.$store.commit("clearCart");
    }
  },

  components: {
    CartItem
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";
$cart-main-color: #f7f7f7;

.cart {
  margin-left: auto;
  position: relative;
}

.cart-button {
  @include button(transparent, $cart-main-color);
  border: 0;
  border-left: 1px solid #d0d0d0;
  border-right: 1px solid #d0d0d0;
  color: #404040;
  cursor: pointer;
  font-size: 14px;
  height: $header-height;
  padding: 0 15px;
}

.cart-icon {
  vertical-align: sub;
}

.cart-dropdown {
  background-color: $cart-main-color;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 0;
  box-shadow: $box-shadow;
  position: absolute;
  right: 0;
  top: $header-height;
  width: 370px;
  z-index: 2;
}

.cart-info {
  align-items: center;
  display: flex;
  padding: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid #e4e4e4;
  }
}

.total-price {
  margin-left: auto;
  margin-right: 10px;
}

.clear-button {
  @include big-round-button(
    linear-gradient(to bottom, #b65ae2 0%, #7b3dc6 100%),
    linear-gradient(to top, #b65ae2 0%, #7b3dc6 100%),
    #885dbc
  );
  cursor: pointer;
}
</style>
