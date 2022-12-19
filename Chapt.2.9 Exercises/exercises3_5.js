'use strict';

const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
  Food: [
    { name: 'Apple Red', price: 6 },
    { name: 'Potato', price: 3 },
  ],
  Toys: [
    { name: 'Potato', price: 9 },
  ],
};
const find = (purchase, itemToFind) => {
  const foundItems = [];
  for (const category of Object.keys(purchase)) {
    foundItems.push(purchase[category].find(item => item.name === itemToFind));
  }
  return foundItems.filter(item => typeof item === 'object');
};

purchase.Electronics.push({ name: 'Mouse', price: 40 });
console.dir(purchase);


console.dir(find(purchase, 'br'));
