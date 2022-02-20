<template>
  <div></div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      currentData: null,
    }
  },
  created() {
    this.getCurrentInvoice()
  },
  methods: {
    ...mapMutations(['SET_CURRENT_DATA']),
    getCurrentInvoice() {
      this.SET_CURRENT_DATA(this.$route.params.invoiceId);
      this.currentData = this.currentInvoiceData[0];
    }
  },
  computed: {
    ...mapState(['currentInvoiceData']),
  },
}
</script>

<style scoped>

</style>