'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawSquare(x, y) {
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, 50, 50);
}

for (let i = 0; i < 600; i += 100) {
    for (let j = 0; j < 400; j += 100)
        drawSquare(i, j)
}
for (let i = 50; i < 600; i += 100) {
    for (let j = 50; j < 400; j += 100)
        drawSquare(i, j)
}



