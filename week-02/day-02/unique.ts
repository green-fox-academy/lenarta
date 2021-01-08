'use strict';

//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

function unique(arr) {
  let unique: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34, 11]));
//  should print: `[1, 11, 34, 52, 61]`
