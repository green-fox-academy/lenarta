'use strict';

import { Aircraft } from './airCraftCarrier'

export class Carrier {

  protected _ammoAvailable: number;
  protected _healthPoints: number;
  protected _listOfAircrafts: Aircraft[];


  constructor(ammoAvailable: number, healthPoints: number) {
    this._ammoAvailable = ammoAvailable;
    this._healthPoints = healthPoints;
    this._listOfAircrafts = [];
  }

  public addAirCraft(plane: Aircraft) {
    this._listOfAircrafts.push(plane);
  }
  public fill(plane: Aircraft) {
    this._ammoAvailable -= plane.getMaxammo();
  }
}