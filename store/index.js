export const state = () => ({
  //State
  cart: [],
  cartLength: 0,
  shippingPrice: 0,
  estimatedDelivery: ""
});

export const actions = {
  addProductToCart({ state, commit }, { product, value }) {
    const cartProduct = state.cart.find(prod => prod._id === product._id);

    if (!cartProduct) {
      commit("pushProductToCart", { product, value });
    } else {
      commit("incrementProductQty", { cartProduct, value });
    }

    commit("incrementCartLength");
  },

  deleteFromCart({ state, commit }, product) {
    commit("deleteProductFromCart", product);
  }
};

export const mutations = {
  pushProductToCart(state, { product, value }) {
    value = Number(value);
    product.quantity = value;

    state.cart.push(product);
  },

  incrementProductQty(state, { cartProduct, value }) {
    value = Number(value);
    cartProduct.quantity += value;

    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
  },

  incrementCartLength(state) {
    state.cartLength = 0;

    if (state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity;
      });
    }
  },

  changeQty(state, { product, qty }) {
    let cartProduct = state.cart.find(prod => prod._id === product._id);
    cartProduct.quantity = qty;

    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity;
      });
    }

    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
  },
  deleteProductFromCart(state, product) {
    //   Method 1
    // let cartProduct = state.cart.find(prod => prod._id === product._id);

    // let indexOfProduct = state.cart.indexOf(cartProduct);
    // state.cart.splice(indexOfProduct, 1);

    // state.cartLength = 0;
    // if (state.cart.length > 0) {
    //   state.cart.map(product => {
    //     state.cartLength += product.quantity;
    //   });
    // }

    // Method 2
    state.cartLength -= product.quantity;

    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1);
  },
  setShipping(state, { shippingPrice, estimatedDelivery }) {
    state.shippingPrice = shippingPrice;
    state.estimatedDelivery = estimatedDelivery;
  },

  clearCart(state) {
    state.cart = [];
    state.cartLength = 0;
    state.shippingPrice = 0;
    state.estimatedDelivery = "";
  }
};

export const getters = {
  getCartLength(state) {
    return state.cartLength;
  },
  getCart(state) {
    return state.cart;
  },
  getCartTotalPrice(state) {
    let totalPrice = 0;

    //Method 1

    // state.cart.forEach(product => {
    //   let priceofEach = product.price * product.quantity;
    //   totalPrice += priceofEach;
    // });

    // return totalPrice;

    //Method 2
    state.cart.map(product => {
      totalPrice += product.price * product.quantity;
    });

    return totalPrice;
  },
  getOrderTotal(state) {
    let totalPrice = 0;

    state.cart.map(product => {
      totalPrice += product.price * product.quantity;
    });

    return totalPrice + state.shippingPrice;
  },
  getEstimatedDelivery(state) {
    return state.estimatedDelivery;
  }
};
