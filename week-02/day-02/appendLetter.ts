'use strict';
export {};
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(list: string[]): string[] {
  let appended = list.map((item) => (item += 'a'));
  /*
  for (let i: number = 0; i < list.length; i++) {
    list[i] += 'a';
  }
  */
  return appended;
}

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
