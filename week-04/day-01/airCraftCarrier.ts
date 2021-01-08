'use strict';

import { Carrier } from './airCraftCarrierShip';

export class Aircraft {
  protected _type: string;
  protected _maxAmmo: number;
  protected _ammo: number;
  protected _baseDamage: number;
  protected _allDamage: number;
  protected _isNeedAmmo: boolean;
  protected _priority: boolean;

  constructor(
    type: string,
    maxAmmo: number,
    baseDamage: number,
    ammo?: number,
    allDamage?: number,
    isNeedAmmo?: boolean,
    priority?: boolean
  ) {
    this._type = type;
    this._maxAmmo = maxAmmo;
    this._ammo = ammo || 0;
    this._baseDamage = baseDamage;
    this._allDamage = allDamage || 0;
    this._priority = priority;
    this._isNeedAmmo = isNeedAmmo || true;
  }

  public getPriority() {
    return this._priority;
  }
  public isNeedAmmo() {
    if (this._ammo <= 0) {
      this._isNeedAmmo = true;
    } else this._isNeedAmmo = true;
    return this._isNeedAmmo;
  }
  public getMaxammo() {
    return this._maxAmmo;
  }
  public getAmmo() {
    return this._ammo;
  }
  public getType() {
    return this._type;
  }
  public getAlldamage() {
    return this._allDamage;
  }
  public getStatus() {
    return `Type: ${this._type}, Ammo: ${this._ammo}, Base Damage: ${this._baseDamage}, All Damage: ${this._allDamage}`;
  }
  public refill(ammoToFill: number): number {
    let usedAmmo;
    if (ammoToFill + this._ammo >= this._maxAmmo) {
      this._ammo = this._maxAmmo;
      this._isNeedAmmo = false;
      usedAmmo = ammoToFill -= this._maxAmmo;
    } else {
      this._ammo += ammoToFill;
      this._isNeedAmmo = false;
      usedAmmo = ammoToFill -= this._ammo;
    }
    return usedAmmo;
  }

  public shipAttack(attack: Carrier) {
    this.fight(this._ammo);
    attack.setHP(this._allDamage);
  }

  public fight(useAmmo: number) {
    for (let i: number = 0; 0 < this._ammo && i < useAmmo; i++) {
      this._ammo -= 1;
      this._allDamage += this._baseDamage;
      //console.log(`${this._ammo} ammo left`)
    }
    if (this._ammo <= 0) {
      this._isNeedAmmo = true;
      console.log(`${this._type} refill needed`);
      //this.refill(this._maxAmmo);
    }
  }
}

export class F16 extends Aircraft {
  protected _type: string;
  protected _maxAmmo: number;
  protected _ammo: number;
  protected _baseDamage: number;
  protected _allDamage: number;
  protected _isNeedAmmo: boolean;
  static priority = false;

  constructor(
    type: string = 'F16',
    maxAmmo: number = 8,
    baseDamage: number = 30,
    ammo = 0,
    allDamage = 0,
    isNeedAmmo?: boolean,
    priority = false
  ) {
    super(type, maxAmmo, baseDamage, ammo, allDamage, isNeedAmmo, priority);
  }
}

export class F35 extends Aircraft {
  protected _type: string;
  protected _maxAmmo: number;
  protected _ammo: number;
  protected _baseDamage: number;
  protected _allDamage: number;
  protected _isNeedAmmo: boolean;
  static _priority: boolean;

  constructor(
    type: string = 'F35',
    maxAmmo: number = 12,
    baseDamage: number = 50,
    ammo = 0,
    allDamage = 0,
    isNeedAmmo?: boolean,
    priority = true
  ) {
    super(type, maxAmmo, baseDamage, ammo, allDamage, isNeedAmmo, priority);
  }
}
/*
let a = new F16();

a.refill(2);
a.refill(3);

a.fight(3);
console.log(a);
*/
