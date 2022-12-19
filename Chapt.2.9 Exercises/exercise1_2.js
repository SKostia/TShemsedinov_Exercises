//As turned out exercise 1 includes exercise 2

'use strict';

const priceList = {
  Keyboard: 40,
  Headphones: 120,
  Laptop: 505,
  Phone: 350 };

const isNumber = value => typeof value === 'number';

const calculateTotal = purchases => {
  let total = 0;
  for (const item of Object.keys(purchases)) {
    const price = purchases[item];
    if (isNumber(price)) {
      total += price;
    } else throw new Error('It seems you took something priceless:)');
  }
  return total;
};

// eslint-disable-next-line max-len
const addTotal = priceList => ({ priceList, total: calculateTotal(priceList) });


const order = addTotal(priceList);
console.dir(order);

console.log();
console.log();
console.log();
console.log();

const items = [
  { price: 40 },
  { price: 120 },
  { price: 505 },
  { price: 350 },
];

const calculateSum1 = goods => {
  let total = 0;
  for (const { price } of goods) {

    if ((typeof price  === 'number') &&  price > 0) {
      total +=  price;
    } else throw Error('blablabla');
  }

  return total;
};

const calculateSum2 = goods => {
  let total = 0;
  const prices =  goods.map(({ price }) => (price));
  total = prices.reduce((accumulator, currentValue) =>
    accumulator + currentValue);
  return total;
};


const addTotal1 = goods => ({ goods, total: calculateSum1(goods) });

const order1 = addTotal1(items);
console.dir(order1);
console.log();
console.log();

console.dir(calculateSum2(items));
