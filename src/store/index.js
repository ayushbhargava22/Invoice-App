import { createStore } from 'vuex';


import actions from './actions.js'

export default createStore({
  state: {
    invoiceModel: null,
  },
  mutations: {
    TOOGLE_INVOICE(state) {
      state.invoiceModel = !state.invoiceModel;
    }
  },
  actions,
  modules: {}
})
