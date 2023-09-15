import { items, discounts } from './FacturaView.vue';

export const calculateTotal = () => {
const subtotal = items.value.reduce((total, item) => total + item.quantity * item.price, 0);
let maxDiscount = 0;

// Aplicar descuentos por cantidad
for (const amount in discounts) {
if (subtotal >= parseInt(amount) && discounts[amount] > maxDiscount) {
maxDiscount = discounts[amount];
}
}

// Aplicar descuentos por precio
if (items.value.length >= 6 && maxDiscount < 10) {
maxDiscount = 10;
}
if (items.value.length >= 12 && maxDiscount < 20) {
maxDiscount = 20;
}

return subtotal - (subtotal * maxDiscount / 100);
};
