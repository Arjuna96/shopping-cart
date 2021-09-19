const product = require('./product.js');
const SALES_TAX_AMOUNT = require('../config/config');
let cart = { items: {}, totalPrice: 0 };
let totalPrice = 0;

// load all the products
product.getProducts();

// add Item to the cart
function addToCart(productId, qty) {
  const id = productId;

  // find the matching product
  const selectedProduct = product.findProduct(id);
  if (cart.items[id]) {
    let updatedQty = cart.items[id].qty + qty;
    cart.items[id] = { name: selectedProduct.name, price: selectedProduct.price, qty: updatedQty };
  } else {
    cart.items[id] = { name: selectedProduct.name, price: selectedProduct.price, qty: qty };
  }

  totalPrice = selectedProduct.price * qty;

  if (cart['totalPrice'] > 0) {
    cart['totalPrice'] = cart['totalPrice'] + totalPrice;
  } else {
    cart['totalPrice'] = totalPrice;
  }

  return 'Item Added Succesfully';
}

//  clean the cart
function cleanCart() {
  cart = { items: {}, totalPrice: 0 };
}

//  get the total cart price
function getTotalPrice() {
  cart['totalPrice'] = Math.round(cart['totalPrice'] * 100) / 100;
  return cart['totalPrice'];
}

//  get the sales tax amount
function getSalesTaxAmount() {
  let salesTaxTotal = (cart['totalPrice'] * SALES_TAX_AMOUNT) / 100;
  cart['salesTaxTotal'] = Math.round(salesTaxTotal * 10) / 10;
  return cart['salesTaxTotal'];
}

//  get the total cart price with sales tax
function getTotalPriceWithTax() {
  getSalesTaxAmount();
  cart['totalPrice'] = cart['totalPrice'] + cart['salesTaxTotal'];
  cart['totalPrice'] = Math.round(cart['totalPrice'] * 100) / 100;
  return parseFloat(cart['totalPrice']);
}

// local test function invocation
// cleanCart();
// addToCart(1, 2);
// addToCart(2, 2);
// getTotalPriceWithTax();

module.exports = {
  addToCart: addToCart,
  cleanCart: cleanCart,
  getTotalPrice: getTotalPrice,
  getTotalPriceWithTax: getTotalPriceWithTax,
  getSalesTaxAmount: getSalesTaxAmount,
};
