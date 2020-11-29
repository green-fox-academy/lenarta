'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawLine1(x) {
  ctx.strokeStyle = 'lime';
  ctx.beginPath();
  ctx.moveTo(0, x);
  ctx.lineTo(x, 400);
  ctx.stroke();
}

function drawLine2(x) {
  ctx.strokeStyle = 'purple';
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(400, x);
  ctx.stroke();
}

for (let i = 0; i <= 400; i += 25) {
  drawLine2(i, i)
  drawLine1(i, i)

}
