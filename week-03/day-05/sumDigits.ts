'use strict';

function digitCount(num: number) {

    let count: number = 0;

    if (num < 2) {
        return num;
    }
    count += 1;
    return count + digitCount(Math.floor(num / 10));
}

console.log(digitCount(123456789));
