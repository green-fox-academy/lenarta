'use strict';

export class Sum {

    public _list: number[] = []

    public sum(sajt: number[]): number {
        let sum: number = 0;

        for (let i: number = 0; i < sajt.length; i++) {
            sum += sajt[i]
        }
        return sum;
    }
}
