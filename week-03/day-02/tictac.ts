'use strict';

import { table } from 'console';

export {};

const fs = require('fs');
const charEncode: string = 'utf-8';

let wino: string = 'wino.txt';
let winx: string = 'winx.txt';
let draw: string = 'draw.txt';

let text: string = winx;

function result(text: string) {
  let fileContent: string[] = [];
  let map: string[][] = [];

  try {
    fileContent = fs.readFileSync(text, charEncode).split('\n');
  } catch (e) {
    console.log(`File not found: ${text}`);
  }
  //console.log(fileContent);

  for (let i = 0; i < 3; i++) {
    map[i] = [];
    for (let j = 0; j < fileContent.length; j++) {
      map[i].push(fileContent[i][j]);
    }
  }
  console.table(map);

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (
        (map[i][j] == map[i + 1][j] && map[i + 1][j] == map[i + 2][j]) ||
        (map[i][j] == map[i][j + 1] && map[i][j + 1] == map[i][j + 2]) ||
        (map[i][j] == map[i + 1][j + 1] &&
          map[i + 1][j + 1] == map[i + 2][j + 2]) ||
        (map[i][j] == map[i + 1][j - 1] &&
          map[i + 1][j - 1] == map[i + 2][j - 2])
      )
        return `${map[i][j]} won`;
    }
    return 'draw';
  }
}

console.table(result(text));
