const number = [1,2,3,4,5,11];
////  multi Line

// const double = [];
// for(const num of number){
//     const result = num * 2
//     double.push(result);
// }
// console.log(double);

// / One line Map...
// const doubleIt = x => x*2;
// const double = number.map(doubleIt);

// const double = number.map(x => x*2);
const double = number.map(x => x*x)
console.log(double);

// String

const names = ['abul','kabul','sabul','habu'];

const name = names.map(nm => nm.length);
const nameStr = names.map(nm => nm);
const nameS0 = names.map(nm => nm[0].toUpperCase());
console.log(name);
console.log(nameStr);
console.log(nameS0);