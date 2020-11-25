'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawSquare(x, y) {
    ctx.strokeRect(x, y, 50, 50);
    ctx.stroke();
}

drawSquare(80, 110)


for (let i = 0; i< 3; i++) {
        drawSquare (i * 150, i *120)
}

