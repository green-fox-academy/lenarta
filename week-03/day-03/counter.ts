"use strict";

export class Counter {
  private _integer: number;
  private _initial: number;

  constructor(initial = 0) {
    this._integer = initial;
    this._initial = initial;
  }

  public add(number?: number): void {
    if (number) {
      this._integer += number;
    } else {
      this._integer++;
    }
  }

  public get(): number {
    return this._integer;
  }

  public reset(): void {
    this._integer = this._initial;
  }
}

let x = new Counter();

x.add(5);
console.log(x);

x.get();
console.log(x);

x.reset();
console.log(x);
