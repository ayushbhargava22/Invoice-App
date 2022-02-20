<template>
  <div class="model flex">
    <div class="model-content">
      <p>Are you sure you want to exit? Your changes will not be saved.</p>
      <div class="buttons flex">
        <button class="purple">Return</button>
        <button class="red">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .model {
    z-index: 100;
    color: white;
    width: 100%;
    height: 100vh;
    position: fixed;
    justify-content: center;
    align-items: center;
  }
  .model-content {
    background-color: #252945;
    max-width: 410px;
    padding: 28px 20px;
  }
  .buttons {
    margin-top: 20px;
    justify-content: space-between;
  }
</style>