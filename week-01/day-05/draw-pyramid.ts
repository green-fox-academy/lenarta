'use strict';
export { }

let lineCount: number = 4;
let str: any = '*';
let spc: any = ' '

for (let i: number = 1; i <= lineCount; i++) {
    for (let j: number = lineCount; j >= lineCount - 1; j--)

        console.log(str);
}


/*
for (let i: number = 1; i <= 4; i++) {
    for (let j: number = 1; j >= 4 - j; j++)

        console.log('*');
}
*/
