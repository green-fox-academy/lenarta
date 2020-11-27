'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawSquare(x, y, z) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, z, z);
}

for (let i = 10; i < 300; i+=i) {
        drawSquare(i, i, i)
    }

