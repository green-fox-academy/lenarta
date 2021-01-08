'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
console.log(quote);

let newQuote = quote.split(' ');
newQuote.splice(3, 0, 'always takes longer than');
//newQuote.toString();
quote = newQuote.join(' ');
console.log(quote);
