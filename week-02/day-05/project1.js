'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


function drawLine(x, y, c, d) {
    ctx.beginPath();
    ctx.moveTo(300, x);
    ctx.lineTo(y, 200);
    ctx.stroke();
  }
  
for (let i = 200; i < 328; i += 16) {
   // for (let j = 500; j > 300; j -= 12) 


        drawLine(i, i)

      }


//    for (let j = 0; j < 64; j += 8)
//for (let i = 300; i < 364; i += 8) {

//      for (let j = 400; j < 200; j -= 8) {






/*
  for (let i = 0; i <= 600; i += 20) {
        drawLine(i, 0)
        drawLine(i, 400)
  }

  for (let i = 0; i <= 400; i += 20) {
    drawLine(0, i)
    drawLine(600, i)
}*/
