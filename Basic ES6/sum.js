// function sum(numb1,numb2){
//    const total = numb1 * numb2;
// //    console.log(total);
// }
// sum(5,5);

// Multiplication  ----> 1
function sum(numb1,numb2 = 1){
   const total = numb1 * numb2;
   console.log(`${numb1} * ${numb2} = ${total}`);
}
sum(6);

// Add  ----> 0
function sum2(numb1,numb2 = 0){
   const total = numb1 + numb2;
   console.log(`${numb1} + ${numb2} = ${total}`);
}
sum2(5);

// String  ----> " "
function nameNoCotation(name1,name2){

   console.log(`${name1} + ${name2}`);
}
nameNoCotation("Haydar Ali");

// String  ----> " "
function name(name1,name2 = ""){

   console.log(`${name1}  ${name2}`);
}
name("Haydar Ali");

// Array  ----> []
const arrName = ['ali','khali', 'mali'];

console.log(arrName);

// Discount
const price = 200;
const discount = `Discount ${price} 20% ${price*0.8}`

console.log(discount);