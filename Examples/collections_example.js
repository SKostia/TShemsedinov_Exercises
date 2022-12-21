'use strict';

//intersection example
{
  const order = new Set(['Laptop', 'Keyboard', 'Mouse']);
  const stock = new Set(['Bag', 'Keyboard']);

  const basket = new Set(
    [...order].filter(item => stock.has(item))
  );

  console.dir(basket);
}

//difference example
{
  const order = new Set(['Laptop', 'Keyboard', 'Mouse']);
  const stock = new Set(['Bag', 'Keyboard']);

  const basket = new Set(
    [...order].filter(item => !stock.has(item))
  );

  console.dir(basket);
}

//Map
{
  const electronics = new Map();
  electronics.set('Laptop', 1500);
  electronics.set('Keyboard', 100);

  console.log(electronics);
  for (const [key, value] of electronics) {
    console.log(`Price of${key} = ${value}`);
  }
}

//Map from object
{
  const electronics = {
    Laptop: 1500,
    Keyboard: 100,
  };

  const goods = new Map(Object.entries(electronics));
  console.log(goods);
}

//Join one Map to another
{
  const electronics = new Map();
  electronics.set('Laptop', 1500);
  electronics.set('Keyboard', 100);

  const textile = new Map();
  textile.set('Bag', 50);
  const goods = new Map([...electronics, ...textile]);

  console.log(goods);
}
