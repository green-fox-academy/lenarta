'use strict';

//Given a string, compute recursively a new string where all the 'x' chars have been removed.

function xchange(text: string, i: number = text.length) {

    if (i < 2) {
        return text;
    }
    return xchange(text.replace(text[i], text[i] + '*'), i - 2);
}


console.log(xchange('blabla'));
