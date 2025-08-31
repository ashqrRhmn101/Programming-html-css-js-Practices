const product = [
    {name: "shirt", price: 500, quantity: 2},
    {name: "Pant", price: 700, quantity: 10},
    {name: "Tupi", price: 800, quantity: 4},
    {name: "Belt", price: 900, quantity: 8},

];
let totalPrices = 0;

for(let {name, price} of product){
    console.log(`${name} Price ${price}`);
    totalPrices += price;
}
console.log("Total Price Product: " , totalPrices); 

// // const discount = product.price*0.8; //20%
// const discount = product.price*20/100;
// const yourPay = product.price-discount;
// const vat = yourPay*7/100;
// const totalPrice = vat+yourPay;

// // const price = product.price; (shortCut)

// console.log(totalPrice);
  
// NEXTTT      

const {price , quantity} = {name: "shirt", price: 500, quantity: 3};

const discount = price*20/100;
const yourPay = price-discount;
const vat = yourPay*7/100;
const totalPrice = vat+yourPay;
const quntty = totalPrice*quantity;

console.log(`Total Shirt price = ${totalPrice} 
Quantity ${quantity} Total = ${quntty} `);