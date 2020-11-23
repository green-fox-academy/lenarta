'use strict'

let until: number = 5;

function sum(until: number): number {
    let sumOfNumbers: number = 0;
    for (let i: number = 0; i <= until; i++) {
        sumOfNumbers += i;
    }
    return sumOfNumbers;
}
console.log(sum(until));