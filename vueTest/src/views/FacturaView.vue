<script setup>
import { ref } from 'vue';

// Variables reactivas para manejar los datos de los artículos
const itemName = ref(''); // Nombre del artículo
const itemQuantity = ref(0); // Cantidad del artículo
const itemPrice = ref(0); // Precio unitario del artículo
const items = ref([]); // Lista de artículos agregados

// Descuentos según la descripción
const discounts = [0.05, 0.10, 0.15, 0.10, 0.20];
const totalQuantityDiscounts = [60000, 120000, 240000];
const totalItemDiscounts = [6, 12];

// Función para agregar un artículo a la lista
const addItem = () => {
  if (itemName.value && itemQuantity.value > 0 && itemPrice.value > 0) {
    items.value.push({
      name: itemName.value,
      quantity: itemQuantity.value,
      price: itemPrice.value,
    });

    // Limpiar los campos después de agregar un artículo
    itemName.value = '';
    itemQuantity.value = 0;
    itemPrice.value = 0;
  }
};

// Función para calcular el total a pagar con descuentos
const calculateTotal = () => {
  let total = 0; // Total antes de descuentos
  let itemTotal = 0; // Total por cada artículo
  let maxDiscount = 0; // Descuento máximo aplicable

  // Calcular el total sin aplicar descuentos
  for (const item of items.value) {
    itemTotal = item.quantity * item.price;
    total += itemTotal;
  }

  // Calcular el descuento basado en la cantidad total
  for (const discount of discounts) {
    if (total >= totalQuantityDiscounts[discounts.indexOf(discount)]) {
      maxDiscount = Math.max(maxDiscount, discount);
    }
  }

  // Calcular el descuento basado en la cantidad de artículos
  for (const discount of discounts) {
    if (items.value.length >= totalItemDiscounts[discounts.indexOf(discount)]) {
      maxDiscount = Math.max(maxDiscount, discount);
    }
  }

  // Aplicar el descuento máximo y devolver el total formateado con 2 decimales
  return (total * (1 - maxDiscount)).toFixed(2);
};
</script>

<template>
  <div class="app">
    <h1>Calculadora de Compras</h1>
    <div class="form">
      <div class="item">
        <label for="itemName">Nombre del Artículo:</label>
        <input type="text" v-model="itemName">
      </div>
      <div class="item">
        <label for="itemQuantity">Cantidad:</label>
        <input type="number" v-model.number="itemQuantity">
      </div>
      <div class="item">
        <label for="itemPrice">Precio Unitario:</label>
        <input type="number" v-model.number="itemPrice">
      </div>
      <button @click="addItem">Agregar Artículo</button>
    </div>
    <div class="items">
      <div class="item" v-for="(item, index) in items" :key="index">
        <p>{{ item.name }} - Cantidad: {{ item.quantity }} - Precio Unitario: ${{ item.price }}</p>
      </div>
    </div>
    <div class="summary">
      <p>Total a Pagar: ${{ calculateTotal() }}</p>
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