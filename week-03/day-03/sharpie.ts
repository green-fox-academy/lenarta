'use strict';

class Sharpie {

    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor(color: string, width: number, inkAmount?: number) {
        this._color = color;
        this._width = width;
        this._inkAmount = 100;
    }

    public use() {
        this._inkAmount -= 5;
    }
}

let marker1 = new Sharpie('lime', 12);
console.log(marker1);

marker1.use();
console.log(marker1);
