'use strict';

export {};

const fs = require('fs');
const charEncode: string = 'utf-8';

let myFile: string = 'duplicated.txt';

function makeSimple(myFile: string) {
  let fileContent: string = '';
  let simple: string[] = [];

  try {
    fileContent = fs.readFileSync(myFile, charEncode);
  } catch (e) {
    console.log(0);
  }

  let stringArray: string[] = fileContent.split(' ');

  for (let i = 0; i < stringArray.length; i++) {
    let word: string = '';
    for (let j = 0; j < stringArray[i].length; j++) {
      if (j % 2 !== 0) word += stringArray[i][j];
    }
    simple.push(word);
  }
  fileContent = simple.join(' ').replace(/ +/g, ' ');
  return fileContent;
}

console.log(makeSimple(myFile));
