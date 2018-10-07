import Vue from "vue";
import Vuex from "vuex";

import { prop, sum, removeBy } from "./utils/func";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },

  mutations: {
    addToCart(state, card) {
      state.cart = [...state.cart, card];
    },

    clearCart(state) {
      state.cart = [];
    },

    removeFromCart(state, id) {
      state.cart = state.cart.filter(removeBy("id", id));
    }
  },

  getters: {
    isInCart: state => id => state.cart.find(card => card.id === id),

    totalPrice: state => state.cart.map(prop("price")).reduce(sum, 0),

    cartItems: state => state.cart
  }
});
