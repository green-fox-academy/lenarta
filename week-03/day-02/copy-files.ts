// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
export { }

'use strict';

const fs = require('fs');
const characterEncoding: string = 'utf-8';

let filE1: string = 'my-file';
let filE2: string = 'my-file2';

function copyContent(file1, file2) {
    let note: boolean;

    try {
        let fileContent: string = fs.readFileSync(file1, "utf-8");
        fs.writeFileSync(file2, fileContent, { 'flag': 'a' });
    }
    catch (e) {
        note = false;
        if (!note) {
            console.log('nöpá')
        }
        return note;
    }
}
copyContent(filE1, filE2)


