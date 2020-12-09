'use strict';

export class Sum {

    public _list: number[] = []

    constructor() {
        this._list = [];
    }

    public sum([]): number {
        let sum: number = 0;

        for (let i: number = 0; i < this._list.length; i++) {
            sum += this._list[i]
        }
        return sum;
    }
}

let a = new Sum;

a._list.push(1, 2, 3);
console.log(a._list);
console.log(sum([1, 2, 3]));
