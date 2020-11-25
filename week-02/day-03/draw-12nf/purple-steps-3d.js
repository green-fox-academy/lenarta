'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawSquare(x, y, size) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, size, size);
    //return size
}
//drawSquare(0, 0, 20)

for (let i = 0; i< 300; i++) {
    for (let j = 20; j < i; j+=20) {
    drawSquare (i, i, j)
}
}

/*
for (let i = 0; i< 50; i++) {
    for (let j = size; i < i; j+=30) {
    drawSquare (size, size, j)
}
/*
  for (let i = 0; i< 50; i++) {
    for (let j = size; j < i; j+=20) {
        drawSquare (600-j, 400-j, i)
    }
}
*/
