'use strict';

//We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function counter(bunnies: number) {
    if (bunnies < 1) {
        return 0;
    }
    if (bunnies % 2 == 0) {
        return 3 + counter(bunnies - 1);

    } if (bunnies % 2 !== 0) {
        return 2 + counter(bunnies - 1);
    }
}
console.log(counter(1));

