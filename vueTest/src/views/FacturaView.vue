<script setup>

</script>
<template>
<div class="app">
    <h1>Calculadora de Compras</h1>
    <div class="form">
      <div class="item">
        <label for="itemName">Nombre del Artículo:</label>
        <input type="text">
      </div>
      <div class="item">
        <label for="itemQuantity">Cantidad:</label>
        <input type="number" >
      </div>
      <div class="item">
        <label for="itemPrice">Precio Unitario:</label>
        <input type="number" >
      </div>
      <button @click="addItem">Agregar Artículo</button>
    </div>
    <div class="items">
      <div  class="item">
        <p></p>
      </div>
    </div>
    <div class="summary">
      <p>Total a Pagar: $</p>
    </div>
  </div>
</template>
<style scoped>
.app {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 20px;
   max-width: 800px;
   margin: 0 auto;
}

.form {
   grid-column: span 2;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
}

.item {
   display: flex;
   flex-direction: column;
}

button {
   grid-column: span 3;
   margin-top: 10px;
}

.items {
   grid-column: span 2;
   display: grid;
   grid-gap: 10px;
}

.summary {
   grid-column: span 2;
}
</style>