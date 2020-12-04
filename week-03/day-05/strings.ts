'use strict';

//Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function xchange(text: string, i: number = text.length) {

    if (i < 1) {
        return text;
    }
    return xchange(text.replace('x', 'y'), i - 1);

}
console.log(xchange('xxxXX XXxxx'))
