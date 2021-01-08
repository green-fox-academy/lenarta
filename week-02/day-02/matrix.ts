'use strict';

let x: number = 4;
let matrix: number[][] = [];

for (let i: number = 0; i < x; i++) {
  matrix[i] = [];
  for (let j: number = 0; j < x; j++) {
    matrix[i][i] = 1;
    matrix[i][j] = 0; // miért nem írja felül?
  }
}
for (let i: number = 0; i < x; i++) {
  console.log(matrix[i]);
}
console.table(matrix);
