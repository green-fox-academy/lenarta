'use strict';
export {};
// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8, 7];

function containsSeven(list: number[]): string {
  let isSeven: boolean = list.includes(7);
  if (isSeven) {
    return 'Hoorray';
  } else return 'Noooooo';
}

console.log(containsSeven(numbers));
