'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let cw = canvas.width;
let ch = canvas.height;
let cwDivisor = cw / 2 / 16;
let chDivisor = ch / 2 / 16;

function drawLine(x, y) {
  ctx.strokeStyle = 'lime';
  ctx.beginPath();
  ctx.moveTo(x, ch / 2);
  ctx.lineTo(cw / 2, y + ch / 2);
  ctx.stroke();
}

for (let x = 0, y = 0; x <= cw; x += cwDivisor) {
  if (x > cw / 2) {
    y += chDivisor
  } else y -= chDivisor
  drawLine(x, y)
}

for (let x = 0, y = 0; x <= cw; x += cwDivisor) {
  if (x > cw / 2) {
    y -= chDivisor
  } else y += chDivisor
  drawLine(x, y)
}
