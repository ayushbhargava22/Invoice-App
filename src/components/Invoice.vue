<template>
  <router-link class="invoice flex" :to="{ name: 'Invoice', params: { invoiceId: invoice.invoiceId }}">
    <div class="flex left">
      <span class="tracking_number">#{{invoice.invoiceId}}</span>
      <span class="due_date">Due {{invoice.paymentDueDate}}</span>
      <span class="client_name"> {{invoice.clientName}} </span>
    </div>
    <div class="right flex">
      <span class="invoice_total">💲{{invoice.invoiceTotal}} </span>
      <div class="status-button flex" :class="{paid: invoice.invoicePaid, draft: invoiceDraft, pending: invoice.invoicePending}">
        <span v-if="invoice.invoicePaid">Paid</span>
        <span v-if="invoice.invoicePending">Pending</span>
        <span v-if="invoice.invoiceDraft">Draft</span>
      </div>
      <div class="arrow">
        <span>></span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["invoice"],
}
</script>

<style scoped>
  .invoice:first-child{
    margin-top: 50px;
  }
  .invoice {
    margin-top: 15px;
    background-color: rgb(30, 33, 57);
    border: 1px solid rgb(30, 33, 57);
    padding: 20px 0;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
  }
  .left {
    margin-left: 20px;
    justify-content: space-between;
    align-items: center;
  }
  .tracking_number {
    color: #fff;
    font-weight: bold;
  }
  .due_date,
  .client_name {
    color: rgb(223, 227, 250);
    font-size: 13px;
  }
  .left span {
    margin-right: 30px;
  }
  .right {
    align-items: center;
  }
  .right .invoice_total {
    margin-right: 40px;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .arrow span {
    margin-right: 10px;
    font-size: 1.5rem;
  }
</style>