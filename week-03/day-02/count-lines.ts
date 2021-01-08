// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

export {};

const fs = require('fs');
const charEncode: string = 'utf-8';

let myFile: string = 'my-file.txt';

function linesCount(myFile: string) {
  let count: number;
  try {
    let content = fs.readFileSync(myFile, charEncode);
    console.log(content);
    count = content.split('\r\n').length;
  } catch (e) {
    console.log(`File not found: ${myFile}`);
  }
  return count;
}

console.log(linesCount(myFile));
