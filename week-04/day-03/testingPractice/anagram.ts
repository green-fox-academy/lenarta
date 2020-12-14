"use strict";

export function anagram(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  } else {
    for (let i: number = 0; i < word1.length; i++) {
      if (!word2.includes(word1[i])) {
        return false;
      } else {
        return true;
      }
    }
  }
}
