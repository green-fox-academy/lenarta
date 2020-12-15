'use strict';

export class Aircraft {

  protected _type: string;
  protected _maxAmmo: number;
  protected _ammo: number;
  protected _baseDamage: number;
  protected _allDamage: number
  protected _priority: boolean

  constructor(type: string, maxAmmo: number, baseDamage: number, ammo?: number, allDamage?: number, priority?: boolean) {
    this._type = type;
    this._maxAmmo = maxAmmo;
    this._ammo = ammo || 0;
    this._baseDamage = baseDamage;
    this._allDamage = allDamage || 0;
    this._priority = priority;
  }
  public refill(ammoToFill: number) {
    if (ammoToFill > this._maxAmmo) {
      this._ammo = this._maxAmmo;
      return ammoToFill - this._maxAmmo;
    } else this._ammo = ammoToFill;
  }

  public getType() {
    return this._type
  }
  public getDamage() {
    return this._allDamage;
  }
  public geStatus() {
    return `Type: ${this._type}, Ammo: ${this._ammo}, Base Damage: ${this._baseDamage}, All Damage: ${this._allDamage}`;
  }

  public fight(useAmmo: number) {
    this._ammo -= useAmmo;
    console.log(`${this._ammo} ammo left`)
    if (this._ammo < 1) {
      console.log('Refill needed')
    }
    this._allDamage = useAmmo * this._baseDamage;
  }

}

export class F16 extends Aircraft {
  protected _type: string;
  protected _maxAmmo: number;
  protected _ammo: number;
  protected _baseDamage: number;
  protected _allDamage: number;
  static priority = false;

  constructor(type: string = 'F16', maxAmmo: number = 8, baseDamage: number = 30, ammo = 0, allDamage = 0, priority = false) {
    super(type, maxAmmo, baseDamage, ammo, allDamage, priority)
  }
}

export class F35 extends Aircraft {
  protected _type: string;
  protected _maxAmmo: number;
  protected _ammo: number;
  protected _baseDamage: number;
  protected _allDamage: number
  static _priority: boolean

  constructor(type: string = 'F35', maxAmmo: number = 12, baseDamage: number = 50, ammo = 0, allDamage = 0, priority = true) {
    super(type, maxAmmo, baseDamage, ammo, allDamage, priority)
  }
}




let a = new F16();
let b = new F35();

a.refill(10);
a.fight(3);

b.refill(10);
b.fight(3);
console.log(a, b);

console.log(a.geStatus());
console.log(b.geStatus());