'use strict';
export {};

let names1: string[] = [];
console.log(names1.length);

names1.push('William');

if (names1.length !== 0) {
  console.log("The list isn't empty");
} else console.log('The list is empty');

names1.push('John', 'Amanda');

console.log(names1.length);
console.log(names1[2]);

for (let i: number = 0; i < names1.length; i++) {
  console.log(names1[i]);
}

for (let i: number = 0; i < names1.length; i++) {
  console.log(i + 1 + '. ' + names1[i]);
}

names1.splice(1, 1);

for (let i: number = names1.length - 1; i >= 0; i--) {
  console.log(names1[i]);
}
names1.splice(0, 2);

if (names1.length !== 0) {
  console.log("The list isn't empty");
} else console.log('The list is empty');
