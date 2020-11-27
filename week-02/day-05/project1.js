'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawLine(x) {
  ctx.strokeStyle = 'lime';
  ctx.beginPath();
  ctx.moveTo(0, x);
  ctx.lineTo(x, 400);
  ctx.stroke();
}

for (let i = 0; i < 400; i += 25) {
  drawLine(i, i)
}
