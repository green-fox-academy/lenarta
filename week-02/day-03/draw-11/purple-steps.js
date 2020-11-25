'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawSquare(x, y) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, 20, 20);
}

    for (let i = 0; i< 300; i+=20) {
        drawSquare (i, i)
    }
