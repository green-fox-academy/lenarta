'use strict'

let baseNum: number = 123;

function doubling(baseNum: number, doubleNumber: number = 2) {
    return baseNum * doubleNumber
}
console.log(doubling(baseNum));