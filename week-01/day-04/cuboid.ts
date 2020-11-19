'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let height: number = 12.8;
let lenght: number = 19.5;
let width: number = 9.6;

console.log('Surface Area: ' + Math.round(2 * (height * lenght + height * width + lenght * width)));
console.log('Volume: ' + Math.round(height * lenght * width));