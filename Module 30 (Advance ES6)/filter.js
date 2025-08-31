const number = [3,41,5,11,2,20,40,24,32];
  
const greaterThan5 = number.filter(x => x > 15).sort((a,b) => a-b);
console.log(greaterThan5);

const evenNumber = number.filter(num => num % 2 === 0)
console.log(evenNumber);