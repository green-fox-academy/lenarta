"use strict";

import { reverse } from "dns";

export {};

let numbers: number[] = [3, 4, 5, 6, 7];
let reversed: number[] = [];

for (let i: number = 1; i <= numbers.length; i++) {
  reversed.push(numbers[numbers.length - i]);
}

console.log(numbers);
console.log(reversed);

console.log(numbers.reverse());
