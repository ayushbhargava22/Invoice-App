<template>
  <div v-if="invoicesLoaded">
    <div class="app flex flex-column">
      <navigation></navigation>
      <div class="app-content flex flex-column">
        <model v-if="modelToggle"></model>
        <transition name="invoice">
          <invoice-model v-if="invoiceModel"></invoice-model>
        </transition>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import InvoiceModel from './components/InvoiceModel.vue';
import { mapState, mapActions } from 'vuex';
import Model from './components/Model.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    InvoiceModel,
    Model
  },
  computed: {
    ...mapState(['invoiceModel', 'modelToggle', 'invoicesLoaded']),
  },
  created() {
    this.GET_INVOICE();
  },
  methods: {
    ...mapActions(['GET_INVOICE']),
  }
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  .app {
    background-color: #141625;
    min-height: 100vh;
    flex-direction: row !important;
  }
  
  .app-content {
    padding: 0 20px;
    flex: 1;
    position: relative;
  }
  .mobile-message {
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #141625;
    color: #fff;
  }
  .mobile-message  p {
      margin-top: 16px;
    }
  .invoice-enter-active,
  .invoice-leave-active {
    transition: 0.8s ease all;
  }
  .invoice-enter-from,
  .invoice-leave-to {
    transform: translateX(-700px);
  }
  button,
  .button {
    cursor: pointer;
    padding: 16px 24px;
    border-radius: 30px;
    border: none;
    font-size: 12px;
    margin-right: 8px;
    color: #fff;
  }
  .dark-purple {
    background-color: #252945;
  }
  .red {
    background-color: #ec5757;
  }
  .purple {
    background-color: #7c5dfa;
  }
  .green {
    background-color: #33d69f;
  }
  .orange {
    background-color: #ff8f00;
  }
  .flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .container {
    width: 100%;
    padding: 40px 10px;
    max-width: 850px;
    margin: 0 auto;
    @media (min-width: 900px) {
      padding-top: 72px;
    }
  }
  .nav-link {
    text-decoration: none;
    color: initial;
  }
  .status-button::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .status-button {
    font-size: 12px;
    margin-right: 30px;
    align-items: center;
    padding: 8px 30px;
    border-radius: 10px;
  }
  .paid::before {
    background-color: #33d69f;
  }
  .paid {
    color: #33d69f;
    background-color: rgba(51, 214, 160, 0.1);
  }
  .pending::before {
    background-color: #ff8f00;
  }
  .pending {
    color: #ff8f00;
  background-color: rgba(255, 145, 0, 0.1);
  }
  .draft::before {
      background-color: #dfe3fa;
    }
  .draft {
      color: #dfe3fa;
    background-color: rgba(223, 227, 250, 0.1);
  }
</style>
