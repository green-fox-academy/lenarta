'use strict'

let numBer: number = 4;

function Sum(until: number): number {

    let sumOfNumbers: number = 0;
    for (let i: number = 0; i <= until; i++) {
        sumOfNumbers += i;
    }
    return sumOfNumbers;
}
console.log(Sum(numBer));
