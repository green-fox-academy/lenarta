'use strict';
export {};

let A: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let B: string[] = [];

A.forEach((element) => {
  B.push(element);
});

console.log(B.includes('Durian'));
console.log(B[3].includes('Dur'));
console.log(B.indexOf('Durian'));

B.splice(B.indexOf('Durian'), 1);
console.log(A);
console.log(B);

A.splice(4, 0, 'Kiwifruit');
console.log(A);

console.log(A.indexOf('Avocado'));
console.log(B.indexOf('Durian'));

B.push('Passion Fruit', 'Pomelo');
console.log(B);
console.log(A[3]);
