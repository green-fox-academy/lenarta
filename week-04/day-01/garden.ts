"use strict";

export class Garden {
  protected _plants: Plants[];
  protected _toWater: toWater[];
}

export class Plants {
  protected _color: string;
  protected _waterAmount: number;
  protected _absorbtion: number;
  protected _isNeedWater: boolean;
  protected _flowers: Flowers[];
  protected _trees: Trees[];
  protected _toWater: toWater[];

  constructor(
    color: string,
    waterAmount: number,
    absorbtion?: number,
    isNeedWater?: boolean
  ) {
    this._color = color;
    this._waterAmount = waterAmount || 0;
    this._absorbtion = absorbtion;
    this._isNeedWater = isNeedWater || true;
    this._flowers = [];
    this._trees = [];
    this._toWater = [];
  }
  /*
    toWater(toWater: toWater) {
      if (toWater) {
        this._toWater.push(toWater);
      }
      */
}

export class toWater extends Plants {
  protected _wateringAmount: number;

  constructor(
    color: string,
    waterAmount: number,
    wateringAmount: number,
    isNeedWater?: boolean
  ) {
    super(color, waterAmount);
    this._wateringAmount = wateringAmount;
    this._flowers = [];
    this._trees = [];
  }
  watering(wateringAmount: number) {
    this._wateringAmount = wateringAmount / toWater.length;
    this._waterAmount += wateringAmount;
  }
}

export class Flowers extends Plants {
  constructor(color: string, waterAmount: number, absorbtion = 0.75) {
    super(color, waterAmount);
    this._waterAmount += waterAmount * absorbtion;
  }

  isNeedWater(flower: Flowers) {
    if (this._waterAmount < 5) {
      this._flowers.push(flower);
    }
  }
}

export class Trees extends Plants {
  constructor(
    color: string,
    waterAmount: number,
    absorbtion = 0.4,
    isNeedWater: boolean
  ) {
    super(color, waterAmount, isNeedWater);
    this._waterAmount += waterAmount * absorbtion;
  }
  isNeedWater(tree: toWater) {
    if (this._waterAmount < 10) {
      this._trees.push(tree);
    }
  }
}
let dio = new Plants("yellow", 5);
console.log(Plants);
