// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    // Define tus variables de estado aquí
    count: 0,
  },
  mutations: {
    // Define tus mutaciones aquí
    increment(state) {
      state.count++;
    },
  },
  actions: {
    // Define tus acciones aquí
    increment(context) {
      context.commit('increment');
    },
  },
  getters: {
    // Define tus getters aquí
    count: (state) => state.count,
  },
});