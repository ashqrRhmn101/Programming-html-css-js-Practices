const product = {name: "shirt", price: 500, quantity: 20};

// // const discount = product.price*0.8; //20%
// const discount = product.price*20/100;
// const yourPay = product.price-discount;
// const vat = yourPay*7/100;
// const totalPrice = vat+yourPay;

// // const price = product.price; (shortCut)

// console.log(totalPrice);

// NEXTTT 

const {price , quantity} = {name: "shirt", price: 500, quantity: 5};

const discount = price*20/100;
const yourPay = price-discount;
const vat = yourPay*7/100;
const totalPrice = vat+yourPay;
const quntty = totalPrice*quantity;

console.log(`Total price = ${totalPrice} 
Quantity ${quantity} Total = ${quntty} `);