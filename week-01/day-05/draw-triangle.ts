'use strict';
/*
let lineCount: number = 4;
let str1: string = '*';
let printedStars: string = '';

for (let i: number = 0; i < lineCount; i++) {
  printedStars = printedStars.concat(str1);
  console.log(printedStars);
}
*/
function makeLine(length) {
  let line: string = '';
  for (var i = 1; i <= length; i++) {
    for (var j = 1; j <= i; j++) {
      line += '*';
    }
    line += '\n';
  }
  return line;
}
console.log(makeLine(5));
