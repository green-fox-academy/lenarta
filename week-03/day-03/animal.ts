"use strict";

class Animal {
  private _hunger: number;
  private _thirst: number;

  constructor(hunger: number, thirst: number) {
    this._hunger = hunger;
    this._thirst = thirst;
  }

  public eat(): void {
    this._hunger -= 5;
  }
  public drink(): void {
    this._thirst -= 5;
  }
  public play(): void {
    (this._thirst += 5), (this._hunger += 5);
  }
}

let killerRabbit = new Animal(10, 10);

killerRabbit.eat();
console.log(killerRabbit);

killerRabbit.drink();
console.log(killerRabbit);

killerRabbit.play();
console.log(killerRabbit);
