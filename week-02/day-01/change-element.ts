
// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test'use strict';

let numbErs: number[] = [1, 2, 3, 8, 5, 6];

let newnumbErs: number[] = numbErs.map(function (change) {
    return change / 2;
});
console.log(newnumbErs)
