const { getProducts, findProduct } = require('./product.js');

test('get array of all products', () => {
  expect(Array.isArray(getProducts())).toBe(true);
});

test('find product to return an object', () => {
  expect(typeof findProduct(1) === 'object').toBe(true);
});
