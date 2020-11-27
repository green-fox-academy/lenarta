'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function connect(list)  {
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(list[0, 0], [0, 1]);
    ctx.lineTo(list[1, 0], [1, 1]);
    ctx.lineTo(list[2] [0], [2] [1]);
    ctx.lineTo(list[3] [0], [3] [1]);
    ctx.stroke();
}

let list =  [[10, 10], [290,  10], [290, 290], [10, 290]];
console.table(list) 
console.log(list[1,0], [1,1]);


connect(list);


/*
ctx.lineTo([2]);
ctx.lineTo([3]);
ctx.lineTo([4]);
ctx.lineTo([5]);
ctx.lineTo([6]);
ctx.lineTo([7]);
ctx.lineTo([8]);
ctx.lineTo([9]);
ctx.lineTo([10]);


function connect(a, b, c, d)  {
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(a, b);
    ctx.lineTo(c, d);
    ctx.stroke();
}
connect(10, 10, 20, 20)
*/
