import { createStore } from 'vuex';
import db from '../firebase/firebaseInit.js';

export default createStore({
  state: {
    invoiceData: [],
    invoiceModel: null,
    modelToggle: null,
    invoicesLoaded: null,
  },
  mutations: {
    TOOGLE_INVOICE(state) {
      state.invoiceModel = !state.invoiceModel;
    },
    TOOGLE_MODEL(state) {
      state.modelToggle = !state.modelToggle;
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoiceData.push(payload);
      console.log(state.invoiceData)
    },
    INVOICES_LOADED(state) {
      state.invoicesLoaded = true;
    }
  },
  actions: {
    async GET_INVOICE({commit, state}) {
      const getData = db.collection('invoice');
      const res = await getData.get();
      res.forEach((doc) => {
        if(!state.invoiceData.some(invoice => invoice.docId === doc.id)) {
          const data = {
            docId: doc.id,
            invoiceId: doc.data().invoiceId,
            billerStreetAddress: doc.data().billerStreetAddress,
            billerCity: doc.data().billerCity,
            billerPostalCode: doc.data().billerPostalCode,
            billerCountry: doc.data().billerCountry,
            clientName: doc.data().clientName,
            clientEmail: doc.data().clientEmail,
            clientStreetAddress: doc.data().clientStreetAddress,
            clientCity: doc.data().clientCity,
            clientPostalCode: doc.data().clientPostalCode,
            clientCountry: doc.data().clientCountry,
            invoiceDateUnix: doc.data().invoiceDateUnix,
            invoiceDate: doc.data().invoiceDate,
            paymentDueDate: doc.data().paymentDueDate,
            paymentDueDateUnix: doc.data().paymentDueDateUnix,
            paymentTerms: doc.data().paymentTerms,
            productDescription: doc.data().productDescription,
            invoiceItemList: doc.data().invoiceItemList,
            invoicePending: doc.data().invoicePending,
            invoiceDraft: doc.data().invoiceDraft,
            invoiceTotal: doc.data().invoiceTotal,
            invoicePaid: doc.data().invoicePaid,
          }
          commit('SET_INVOICE_DATA', data);
        }
      })
      commit('INVOICES_LOADED')
    }
  },
  modules: {}
})
