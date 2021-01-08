'use strict';
export {};

let spent: number[] = [500, 1000, 1250, 175, 800, 120];
let newArray: number[] = [];

console.log(spent.reduce((a, b) => a + b));
console.log(spent.reduce((a, b) => Math.max(a, b)));
console.log(spent.reduce((a, b) => Math.min(a, b)));

let sum = spent.reduce((a, b) => a + b);
console.log(sum / spent.length);
console.log(newArray);
