'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawSquare(x, y, z) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, z, z);
}
for (let i = 0; i < 80; i += 20) {
    for (let j = 20; j < 60; j += 20) {
        drawSquare(i, i, j)
    }
}
