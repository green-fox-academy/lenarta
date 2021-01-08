'use strict';

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff', 'Béla'];

let matches: string[] = [];

function makingMatches(long: string[], short: string[]) {
  for (
    let i: number = 0, j: number = 0;
    i < long.length || j < short.length;
    i++, j++
  ) {
    if (i < long.length) {
      matches.push(long[i]);
    }
    if (j < short.length) {
      matches.push(short[j]);
    }
  }
  return matches;
}

console.log(makingMatches(girls, boys));
