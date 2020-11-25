'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawSquare(size) {
    ctx.strokeRect(600/2 -size/2, 400/2-size/2, size, size);
    ctx.stroke();
}

drawSquare(50)

for (let i = 0; i< 4; i++) {
        drawSquare (i * 100)
}

