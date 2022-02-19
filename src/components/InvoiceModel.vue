<template>
  <div class="invoice-wrap flex flex-column" ref="invoiceWrap">
    <form class="invoice-content">
      <h2>Create Invoice</h2>

      <!-- Bill from -->
      <div class="bill-from flex flex-column">
        <h5>Bill From</h5>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address</label>
          <input type="text" id="billerStreetAddress" v-model="billerStreetAddress" />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input type="text" id="billerCity" v-model="billerCity" />
          </div>
          <div class="input flex flex-column">
            <label for="billerPostalCode">Postal Code</label>
            <input type="number" id="billerPostalCode" v-model="billerPostalCode" />
          </div>
          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input type="text" id="billerCountry" v-model="billerCountry" />
          </div>
        </div>
      </div>
      <!-- Bill To -->
      <div class="bill-to flex flex-column">
        <h5>Bill To</h5>
        <div class="input flex flex-column">
          <label for="clientName">Client Name</label>
          <input type="text" id="clientName" v-model="clientName" />
        </div>
        <div class="input flex flex-column">
          <label for="clientEmail">Client Email</label>
          <input type="email" id="clientEmail" placeholder="e.g.email@example.com" v-model="clientEmail" />
        </div>
        <div class="input flex flex-column">
          <label for="clientStreetAddress">Street Address</label>
          <input type="text" id="clientStreetAddress" v-model="clientStreetAddress" />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="clientCity">City</label>
            <input type="text" id="clientCity" v-model="clientCity" />
          </div>
          <div class="input flex flex-column">
            <label for="clientPostalCode">Postal Code</label>
            <input type="number" id="clientPostalCode" v-model="clientPostalCode" />
          </div>
          <div class="input flex flex-column">
            <label for="clientCountry">Country</label>
            <input type="text" id="clientCountry" v-model="clientCountry" />
          </div>
        </div>
      </div>

      <!-- Work details -->
      <div class="invoice-work flex flex-column">
        <div class="payment flex">
          <div class="input flex flex-column">
            <label for="invoiceDate">Invoice Date</label>
            <input type="text" id="invoiceDate" v-model="invoiceDate" />
          </div>
          <div class="input flex flex-column">
            <label for="paymentDueDate">Due Date</label>
            <input type="number" id="paymentDueDate" v-model="paymentDueDate" />
          </div>
        </div>
        <div class="input flex flex-column">
            <label for="paymentTerms">Payment Terms</label>
            <select id="paymentTerms" v-model="paymentTerms">
              <option value="30">Net 30 Days</option>
              <option value="60">Net 60 Days</option>
            </select>
        </div>
        <div class="input flex flex-column">
            <label for="productDescription">Product Description</label>
            <input type="text" id="productDescription" v-model="productDescription" />
        </div>
        <div class="work-items">
          <h3>Item List</h3>
          <table class="item-list">
            <tr class="table-heading">
              <th class="item-name">Item Name</th>
              <th class="qty">Quantity</th>
              <th class="price">Price</th>
              <th class="total">Total</th>
            </tr>
            <tr class="table-items flex" v-for="(item, index) in invoiceItemList" :key="index">
              <td class="item-name">
                <input type="text" v-model="item.itemName">
              </td>
              <td class="qty">
                <input type="text" v-model="item.qty">
              </td>
              <td class="price">
                <input type="text" v-model="item.price">
              </td>
              <td class="total flex">
                ${{item.total = item.qty * item.price}}
              </td>
              <p class="delete">X</p>
            </tr>
          </table>
          <div class="flex button">
            <p>+ Add New Item</p>
          </div>
        </div>
      </div>
      <!-- buttons -->
      <div class="save flex">
        <div class="left">
          <button class="red" @click="closeInvoice">Cancel</button>
        </div>
        <div class="right flex">
          <button class="dark-purple">Save Draft</button>
          <button class="purple">Create Invoice</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  data() {
    return {
      billerStreetAddress: null,
      billerCity: null,
      billerPostalCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientPostalCode: null,
      clientCountry: null,
      invoiceDate: null,
      paymentDueDate: null,
      paymentTerms: null,
      productDescription: null,
      invoiceItemList: [],
    }
  },
  methods: {
    ...mapMutations(['TOOGLE_INVOICE']),
     closeInvoice() {
      this.TOOGLE_INVOICE();
    },
  }
}
</script>

<style scoped>
  .invoice-wrap {
    color: white;
    position: fixed;
    top: 0px;
    bottom: 0px;
    height: 100vh;
    overflow: scroll;
  }
  .invoice-content {
    background-color: #141625;
    color:#fff;
    box-shadow: 10px 4px 6px -1px rgba(0,0,0,0.2), 0 2px 4px -1px rgba(0,0,0,0.06);
  }
  form {
    margin-top: 40px;
  }
  .bill-from,
  .bill-to,
  .work-items {
    margin-top: 40px;
  }
  .bill-from h5 ,
  .bill-to h5 {
    color: rgb(124, 93, 250);
    margin-bottom: 1.2rem;
    font-weight: bold;
  }
  label {
    font-weight: normal;
    color: rgb(223, 227, 250);
    font-size: 0.85rem;
     margin-top: 20px;
  }
  input,
  #paymentTerms {
    height: 45px;
    border-radius: 5px;
    margin-top: 10px;
    width: 90%;
    background: rgb(30, 33, 57);
    border: 1px solid rgb(30, 33, 57);
  }
  #paymentTerms {
    color: white;
  }
  table {
    width: 90%;
  }
  .table-heading {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .button {
    height: 50px;
    background: rgb(30, 33, 57);
    border: 1px solid rgb(30, 33, 57);
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
  .save {
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
  }
</style>