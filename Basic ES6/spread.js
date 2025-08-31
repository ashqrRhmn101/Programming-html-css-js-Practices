const first = [1,2,3,4,5];
const sec = [7,8,9,10];
sec.push(11);
const third = [...first, 6 , ...sec];

console.log(third);