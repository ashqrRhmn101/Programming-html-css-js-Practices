const add1 = function(n1,n2){
    return n1+n2;
}
const result = add1(20,10);
console.log(result);

// Arrow function
const add2 = (n1,n2) => n1 * n2;
const isFirst = (x,y) => x > y;

// const total = add2(20,10);
console.log(add2(20,10));
// console.log(total);
const isFirsts = isFirst(20,50);
console.log(isFirsts);
