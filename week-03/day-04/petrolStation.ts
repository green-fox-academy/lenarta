'use strict';

export class Station {
    public _gasAmount: number = 1000;

    constructor() { }

    public refill(carCapacity: number) {
        return this._gasAmount -= 
    }
}

export class Car {
    public _capacity: number;
    public _carGasAmount: number;

    constructor(capacity: number = 100, carGasAmount: number = 0) {
        this._capacity = capacity;
        this._carGasAmount = carGasAmount;
    }

}
let audi = new Car;
