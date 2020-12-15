'use strict';

import { Aircraft, F16, F35 } from './airCraftCarrier'

export class Carrier {

  protected _ammoAvailable: number;
  protected _healthPoints: number;
  protected _listOfAircrafts: Aircraft[];
  protected _toAmmo: Aircraft[];
  protected _totalDamage: number;


  constructor(ammoAvailable: number, healthPoints: number) {
    this._ammoAvailable = ammoAvailable;
    this._healthPoints = healthPoints;
    this._listOfAircrafts = [];
    this._toAmmo = [];
  }

  public addAirCraft(plane: Aircraft) {
    this._listOfAircrafts.push(plane);
  }

  public fill(plane: Aircraft) {

    if (this._ammoAvailable >= plane.getMaxammo()) {
      plane.refill(plane.getMaxammo());
      this._ammoAvailable -= plane.getMaxammo();

    } else if (this._ammoAvailable < plane.getMaxammo() || this._ammoAvailable <= 0) {
      console.log(`Sorry buddy, ${this._ammoAvailable} ammo left, you are alone :(`);
      plane.refill(this._ammoAvailable)
      this._ammoAvailable = 0;
    }
    return this._ammoAvailable
  }

  public attack() {

    for (let i: number = 0; i < this._ammoAvailable; i++) {
      this._listOfAircrafts.forEach(plane => {
        plane.fight(i)
        if (plane.isNeedAmmo && plane.getPriority) {
          this.fill(plane);
        } else this.fill(plane);
      });
    }


  }
}



let muki = new Carrier(20, 50);

let c = new F16;
let d = new F35;
muki.addAirCraft(c)
muki.addAirCraft(d)

muki.fill(c);
c.fight(5)
muki.fill(d);
d.fight(6)

console.log(muki);

//muki.fill(d, 8);
//console.log(muki);



