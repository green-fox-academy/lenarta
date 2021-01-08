'use strict';

export function countLetters(text: string) {
  let dictionary = {};
  for (let i: number = 0; i < text.length; i++) {
    if (text.charAt(i) in dictionary) {
      dictionary[text.charAt(i)] += 1;
    } else {
      dictionary[text.charAt(i)] = 1;
    }
  }
  return dictionary;
}

console.log(countLetters('sajtttt'));
