'use strict';

export class Sharpie {

  protected _color: string;
  private _width: number;
  private _inkAmount: number;
  protected _usable: boolean;


  constructor(color: string, width?: number, inkAmount = 10, usable = true,) {
    this._color = color;
    this._width = width;
    this._inkAmount = inkAmount;
    this._usable = usable;
  }

  public use(occasion?: number) {
    this._inkAmount -= (5 * occasion);
  }
  public get inkAmount(): number {
    return this._inkAmount;
  }
  public get usable(): boolean {
    return this._usable;
  }
  public set usable(x) {
    this._usable = x
  }

}


class SharpieSet {
  private _list: Sharpie[];

  constructor() {
    this._list = [];
  }

  public countUsable(sharpie: Sharpie): void {
    if (sharpie.inkAmount < 1) {
      sharpie.usable = false;
    }
  }

  public addSharpie(sharpie: Sharpie) {
    this._list.push(sharpie);
  }

  public removeTrash() {

    for (let i: number = 0; i < this._list.length; i++) {
      this.countUsable(this._list[i])
      if (!this._list[i].usable) {
        this._list.splice(i, 1);
      }
    }
  }
}

let marker1 = new Sharpie('lime');
let marker2 = new Sharpie('red');

let list = new SharpieSet;

list.addSharpie(marker1);
list.addSharpie(marker2);

marker1.use(2);
console.log(list);

list.removeTrash();
console.log(list);
