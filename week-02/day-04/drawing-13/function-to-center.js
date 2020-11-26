'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


function drawLine(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
  }


  for (let i = 0; i <= 600; i += 20) {
        drawLine(i, 0)
        drawLine(i, 400)
  }

  for (let i = 0; i <= 400; i += 20) {
    drawLine(0, i)
    drawLine(600, i)
}
