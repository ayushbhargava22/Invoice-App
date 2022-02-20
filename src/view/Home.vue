<template>
  <div class="home container">
    <div class="header flex">
      <div class="left-header flex flex-column">
        <h1>Invoices</h1>
        <p>There are 7 total invoices.</p>
      </div>
      <div class="right-header flex">
        <div @click="toggleFilterMenu" class="filter-invoice">
          <span>Filter by status</span>
          <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          <ul v-show="filterMenu" class="filter-menu">
            <li>Paid</li>
            <li>Pending</li>
            <li>Draft</li>
          </ul>
        </div>
        <div @click="newInvoice" class="new-invoice">
          <p class="svg">+</p>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
    <div>
      <invoice v-for="(invoice, index) in invoiceData" :key="index" :invoices="invoiceData"></invoice>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex';
import Invoice from '../components/Invoice.vue';

export default {
  name: 'Home',
  components: {
    Invoice
  },
  data() {
    return {
      filterMenu: false,
    }
  },
  methods: {
    ...mapMutations(['TOOGLE_INVOICE']),
     newInvoice() {
      this.TOOGLE_INVOICE();
    },
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    }
  },
  computed: {
    ...mapState(['invoiceData'])
  }
}
</script>

<style scoped>
  .header {
    justify-content: space-between;
    color: white;
    align-items: center;
  }
  .filter-invoice {
    margin-right: 25px;
    position: relative;
     cursor: pointer;
  }
  .filter-invoice span {
    margin-right: 10px;
  }
  .right-header {
    align-items: center;
  }
  .new-invoice {
    border: 1px solid rgb(124, 93, 250);
    background-color: rgb(124, 93, 250);
    color: white;
    height: 40px;
    border-radius: 20px;
    padding: 0px 20px;
    padding-left: 10px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .new-invoice span {
    font-size: 12px;
    font-weight: bold;
  }
  .svg {
    background-color: white;
    color: rgb(124, 93, 250);
    align-items: center;
    width: 25px;
    height: 25px;
    margin-right: 5px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }
  .filter-menu {
    list-style: none;
    position: absolute;
    top: 40px;
    border: 1px solid rgb(37, 41, 69);
    box-shadow: rgb(0 0 0 / 25%) 0px 10px 20px;
    background-color: rgb(37, 41, 69);
    padding-right: 4rem;
    padding-top: 20px;
    padding-left: 30px;
    padding-bottom: 30px;
    border-radius: 10px;
  }
  .filter-menu li {
    line-height: 2rem;
    font-weight: bold;
  }
</style>