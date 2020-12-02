// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
export { }

const fs = require("fs");
const characterEncoding: string = 'utf-8';

let myFile: string = 'myfile.txt';

function linesCount(filename: string) {
    let myNum: number = 2;
    try {
        let fileContent = fs.readFileSync(myFile, "utf-8");
        let content: number = myFile.split('\n').length;
        console.log(content)
    }
    catch (e) {
        console.log(0)
        myNum = 0;
    }
    return myNum

}

linesCount(myFile)
console.log(myNum)

