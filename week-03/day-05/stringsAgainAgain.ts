'use strict';

//Given a string, compute recursively a new string where all the 'x' chars have been removed.

function xchange(text: string, i: number = text.length) {

    if (i < 1) {
        return text;
    }
    return xchange(text.charAt[i] += '*'), i - 2;
}


console.log(xchange('blabla blabla blabla'));
