'use strict'

let nameToGreet: string = 'Green Fox';

function greet(greeting: string): string {
    return 'Greetings, dear ' + nameToGreet;
}
console.log(greet(nameToGreet));