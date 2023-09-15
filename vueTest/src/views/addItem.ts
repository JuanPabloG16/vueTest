import { items, newItem } from './FacturaView.vue';

export const addItem = () => {
items.value.push({
name: newItem.value.name,
quantity: newItem.value.quantity,
price: newItem.value.price
});
newItem.value.name = '';
newItem.value.quantity = 0;
newItem.value.price = 0;
};
