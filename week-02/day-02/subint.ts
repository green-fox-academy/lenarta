'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)
// Example

function findMatchingIndexes(params: number, list: number[]) {
  let temp: string[] = [];
  let match: number[] = [];
  for (let i: number = 0; i < list.length; i++) {
    temp.push(list[i].toString());
    if (temp[i].includes(params.toString())) {
      match.push(i);
    }
  }
  return match;
}
console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
// should print: '[]'
