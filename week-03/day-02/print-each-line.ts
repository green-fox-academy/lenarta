// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

"use strict";

const fs = require("fs");
const characterEncoding: string = 'utf-8';
let fileContent: string;

try {
    fileContent = fs.readFileSync('my-file.txt', characterEncoding);
} catch (e) {
    console.log('Unable to read file: my-file.txt');
}
console.log(fileContent);