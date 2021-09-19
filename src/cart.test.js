const { addToCart, cleanCart, getTotalPrice, getTotalPriceWithTax, getSalesTaxAmount } = require('./cart');
// const  = require('./cart');

// let prod1 = { id: 1, name: 'Shower Gel', price: 49.99 };
// let prod2 = { id: 2, name: 'Deodorant', price: 99.99 };

test('Add 5 Shower Gels, then price to equal 249.95', () => {
  cleanCart();
  addToCart(1, 5);
  expect(getTotalPrice()).toBe(249.95);
  //   expect(addToCart(2, prod, 3)).toBe(72);
});

test('Add 3 more Shower Gels, then price to equal 399.92', () => {
  cleanCart();
  addToCart(1, 5);
  addToCart(1, 3);
  expect(getTotalPrice()).toBe(399.92);
});

test('Add 2 Shower Gels & 2 Deodorants with sales tax price to equal 37.50', () => {
  //   addToCart(2, prod2, 3);
  cleanCart();
  addToCart(1, 2);
  addToCart(2, 2);
  expect(getSalesTaxAmount()).toBe(37.5);
});

test('Add 2 Shower Gels & 2 Deodorants with sales tax, then price to equal 337.46', () => {
  //   addToCart(2, prod2, 3);
  cleanCart();
  addToCart(1, 2);
  addToCart(2, 2);
  expect(getTotalPriceWithTax()).toBe(337.46);
});
