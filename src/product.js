const products = require('../resources/products.json');

let productList = [];
function getProducts() {
  productList = products;
  return productList;
}

function findProduct(id) {
  const selectedProduct = productList.find((prod) => prod.id === id);
  return selectedProduct;
}

module.exports = {
  getProducts: getProducts,
  findProduct: findProduct,
};
