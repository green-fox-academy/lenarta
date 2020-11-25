'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(200, 300);
ctx.stroke();

ctx.strokeStyle = 'purple';
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(200, 100);
ctx.stroke();