'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawRectangles(x, y, a, b) {
    ctx.strokeStyle = '';
    ctx.strokeRect(x, y, a, b);
    ctx.stroke();
}

function changeColor(element) {
    ctx.strokeStyle = ['green', 'red', 'yellow']
}


//drawRectangles(60, 120, 30, 20)

for (let i = 0; i< 3; i++) {
        drawRectangles (i * 150, i *120, i*a, i*b)
}

