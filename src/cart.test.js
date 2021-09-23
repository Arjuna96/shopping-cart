const { addToCart, cleanCart, getTotalPrice, getTotalPriceWithTax, getSalesTaxAmount } = require('./cart');

test('Add 5 Shower Gels, then price to equal 249.95', () => {
  cleanCart();
  addToCart(1, 5);
  expect(getTotalPrice()).toBe(249.95);
});

test('Add 3 more Shower Gels, then price to equal 399.92', () => {
  cleanCart();
  addToCart(1, 5);
  addToCart(1, 3);
  expect(getTotalPrice()).toBe(399.92);
});

test('Add 2 Shower Gels & 2 Deodorants with sales tax price to equal 37.50', () => {
  cleanCart();
  addToCart(1, 2);
  addToCart(2, 2);
  expect(getSalesTaxAmount()).toBe(37.5);
});

test('Add 2 Shower Gels & 2 Deodorants with sales tax, then price to equal 337.46', () => {
  cleanCart();
  addToCart(1, 2);
  addToCart(2, 2);
  expect(getTotalPriceWithTax()).toBe(337.46);
});
