'use strict';

//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function adder(n: number) {
    if (n < 1) {
        return n;
    }
    return n + adder(n - 1);
}
console.log(adder(3));
