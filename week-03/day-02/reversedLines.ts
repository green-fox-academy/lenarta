export {};

const fs = require('fs');
const charEncode: string = 'utf-8';

let text: string = 'reversedlines.txt';

function reverse(text: string) {
  let fileContent: string[] = [];
  let straight: string[] = [];

  try {
    fileContent = fs.readFileSync(text, charEncode).split('\r');
  } catch (e) {
    console.log(`File not found: ${text}`);
  }
  console.log(fileContent);

  for (let i = 0; i < fileContent.length; i++) {
    let line: string = '';
    for (let j = fileContent[i].length - 1; j >= 0; j--) {
      line += fileContent[i][j];
    }
    straight.push(line);
  }
  return straight.join(' ');
}

console.log(reverse(text));
