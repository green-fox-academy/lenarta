'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


function drawLine(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y);
    ctx.stroke();
  }

  drawLine(20, 50)

  for (let i = 0; i < 4; i++ ) {
      drawLine (i * 20, i *80)
  }
