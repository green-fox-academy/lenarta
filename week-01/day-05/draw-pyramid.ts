'use strict';
export {};

let lineCount: number = 4;

let space: string = ' ';
let printedSpace: string = '';

let str1: string = '**';
let printedStars: string = '*';

for (let i: number = 0; i < lineCount; i++) {
  printedSpace = printedSpace.concat(space);
}

for (let i: number = 0; i < lineCount; i++) {
  printedSpace = printedSpace.slice(1);
  console.log(printedSpace.concat(printedStars));
  printedStars = printedStars.concat(str1);
}
