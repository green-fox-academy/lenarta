'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawRainbow(size, color) {
    ctx.fillStyle = (color);
    ctx.fillRect(600/2 -size/2, 400/2-size/2, size, size);
}

drawRainbow(50, 'green')


colors = [red, green, yellow, black]

    for (let i = 0; i< Object.keys(colors).length -1; i++) {
        drawRainbow (i*3, 'colors[i')
}


