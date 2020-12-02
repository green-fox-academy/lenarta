'use strict';


class Postit {

    private _background: string;
    private _text: string;
    private _textColor: string;

    constructor(background: string, text: string, textColor: string) {

        this._background = background;
        this._text = text;
        this._textColor = textColor;
    }

    public fill(background: string, text: string, textColor: string): void {

        this._background = background;
        this._text = text;
        this._textColor = textColor;

    }
}

let idea1 = new Postit('orange', 'Idea 1', 'blue');
console.log(idea1);

let awesome = new Postit('pink', 'Awesome', 'black');
console.log(awesome);

let superb = new Postit('yellow', 'Superb', 'green');
console.log(superb);
