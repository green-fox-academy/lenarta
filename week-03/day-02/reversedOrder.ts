'use strict';
export {};

const fs = require('fs');
const charEncode: string = 'utf-8';

let text: string = 'reversedorder.txt';

function reverseOrder(text: string) {
  let fileContent: string[] = [];

  try {
    fileContent = fs.readFileSync(text, charEncode).split('\r');
  } catch (e) {
    console.log(`File not found: ${text}`);
  }
  console.log(fileContent);
  return fileContent.reverse().join(' ');
}

console.log(reverseOrder(text));
