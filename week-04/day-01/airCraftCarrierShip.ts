'use strict';

import { Aircraft, F16, F35 } from './airCraftCarrier';

export class Carrier {
  protected _ammoAvailable: number;
  protected _healthPoints: number;
  protected _listOfAircrafts: Aircraft[];
  protected _totalDamage: number;

  constructor(
    ammoAvailable: number,
    healthPoints: number,
    totalDamage?: number
  ) {
    this._ammoAvailable = ammoAvailable;
    this._healthPoints = healthPoints;
    this._listOfAircrafts = [];
    this._totalDamage = totalDamage || 0;
  }

  public setHP(damage: number) {
    this._healthPoints -= damage;
  }
  public addAirCraft(plane: Aircraft) {
    this._listOfAircrafts.push(plane);
  }

  public fill(plane: Aircraft) {
    if (this._ammoAvailable >= plane.getMaxammo() && plane.getAmmo() == 0) {
      plane.refill(plane.getMaxammo());
      this._ammoAvailable -= plane.getMaxammo();
    } else if (this._ammoAvailable > 0 && plane.getAmmo() == 0) {
      plane.refill(this._ammoAvailable);
      this._ammoAvailable -= plane.getAmmo();
    }
    return this._ammoAvailable;
  }

  public attack(enemy: Carrier) {
    for (let i: number = 0; enemy._healthPoints <= 0; i++) {
      this._listOfAircrafts.forEach((plane) => {
        plane.shipAttack(enemy);
        this._totalDamage += plane.getAlldamage();
        if (enemy._healthPoints <= 0) {
          return `It's dead Jim :(`;
        }
        if (plane.isNeedAmmo && enemy._healthPoints > 0) {
          this.fill(plane);
        }
      });
    }
  }

  public getTotalDamage(): number {
    for (let i: number = 0; i < this._listOfAircrafts.length; i++) {
      this._totalDamage += this._listOfAircrafts[i].getAlldamage();
    }
    return this._totalDamage;
  }

  public getStatus(): void {
    console.log(
      `HP: ${this._healthPoints}, Aircraft count: ${this._listOfAircrafts.length}, Ammo storage: ${this._ammoAvailable}, Total damage: ${this._totalDamage}`
    );
  }
}

const muki = new Carrier(200, 50);
let victim = new Carrier(0, 490);

const f16 = new F16();
const f35 = new F35();
muki.addAirCraft(f16);

muki.fill(f16);

muki.attack(victim);

console.log(f16);

console.log(muki.getStatus());
console.log(victim.getStatus());
