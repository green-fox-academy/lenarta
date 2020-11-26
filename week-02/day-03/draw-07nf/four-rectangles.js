'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawRectangles(x, y, a, b, colors) {
    ctx.strokeStyle = colors;
    ctx.strokeRect(x, y, a, b);
    ctx.stroke();
}


//drawRectangles(60, 120, 30, 20)
let colors = [['red'], ['green'], ['yellow'], ['black']];

for (let i = 10; i< 80; i+=20) {
    for (let j = 0; j < colors.length -1; j++) 
        drawRectangles (i+20, i+30, i+10, i+10, j)
}
/*
function changeColor(element) {
    ctx.stroke = [['green'], ['red'], ['yellow']]
}
*/
