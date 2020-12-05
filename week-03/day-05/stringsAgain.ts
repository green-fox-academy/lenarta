'use strict';

//Given a string, compute recursively a new string where all the 'x' chars have been removed.

function xchange(text: string, i: number = text.length) {

    if (i < 1) {
        return text;
    }
    return xchange(text.replace('x', ''), i - 1);
}
console.log(xchange('xaxa xaxa xaxa'));
