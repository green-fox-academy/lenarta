'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawRainbow(size, colors) {
    ctx.fillStyle = (colors);
    ctx.fillRect(600/2 -size/2, 400/2-size/2, size, size);
}

drawRainbow (40, 'red')

//let colors = [[red], [green], [yellow], [black]];

    for (let i = 20; i < 4; i+=20) {
        drawRainbow (i, 'red')
    }
    /*
        for (let j = 0; j < colors.length -1; j++) 

            drawRainbow (i, colors[j])
    }
/*
*/

