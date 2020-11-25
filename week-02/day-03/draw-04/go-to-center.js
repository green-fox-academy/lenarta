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

  drawLine(20, 50)

  for (let i = 0; i < 14; i++ ) {
      drawLine (i * 20, i *80)
  }
