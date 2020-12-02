// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"
export { }

'use strict';

const fs = require('fs');

let myName: string = 'Bélavagyok'

function writeIn(filename: string) {

    try {
        fs.writeFileSync(filename, myName, { 'flag': 'a' });
    }
    catch (e) {
        console.log('Unable to write file: my-file.txt');
    }
}

writeIn('myfile.txt')
