'use strict';
export {};
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');
const charEncode: string = 'utf-8';

let text: string = 'log.txt';

function uniqueIP(text: string) {
  let fileContent: string[] = [];
  let logLine: string[][] = [];

  try {
    fileContent = fs.readFileSync(text, charEncode).split('\n');
  } catch (e) {
    console.log(`File not found: ${text}`);
  }
  //console.log(fileContent);
  for (let i = 0; i < fileContent.length; i++) {
    logLine.push(fileContent[i].split('  '));
  }

  let uniqueIP: string[] = [];
  for (let i = 0; i < logLine.length; i++) {
    let counter: number = 0;
    for (let j = 0; j < logLine.length; j++) {
      if (logLine[i][2] == logLine[j][2]) {
        counter++;
      }
    }
    if (counter == 1) {
      uniqueIP.push(logLine[i][2]);
    }
  }
  return uniqueIP.sort();
}

function ratio(text: string) {
  let fileContent: string[] = [];
  let logLine: string[][] = [];

  try {
    fileContent = fs.readFileSync(text, charEncode).split('\n');
  } catch (e) {
    console.log(`File not found: ${text}`);
  }
  for (let i = 0; i < fileContent.length; i++) {
    logLine.push(fileContent[i].split('  '));
  }
  //console.log(logLine);

  let getNumber: number = 0;
  let postNumber: number = 0;
  for (let i = 0; i < logLine.length; i++) {
    if (logLine[i][3].includes('GET')) {
      getNumber++;
    } else postNumber++;
  }

  return getNumber / postNumber;
}

console.log(uniqueIP(text));
console.log(ratio(text));
