'use strict';

export function addTwoNumbers(x: number, y: number): number {
    if (x < 0 || y < 0) {
        return null;
    }
    return x + y;
}

export function removeLastElement(array: number[]): number[] {
    array.pop();
    return array;
}