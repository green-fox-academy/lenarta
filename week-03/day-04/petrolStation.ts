'use strict';

/*
    Create a Station and a Car classes
    Station
        gasAmount -> available gas amount of the gas station
        refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
    Car
        gasAmount -> gas amount of the car
        capacity -> capacity of the fuel tank
        create constructor for Car where:
            initialize gasAmount -> 0
            initialize capacity -> 100
            */


export class Station {
    protected _gasAmount: number = 1000;

    public refillCar(car: Car): void {
        this._gasAmount -= car.capacity
        car.refill();
    }

    public get gasAmount(): number {
        return this._gasAmount
    }
}

export class Car {
    protected _capacity: number;
    protected _carGasAmount: number;

    constructor(capacity: number = 100, carGasAmount: number = 0) {
        this._capacity = capacity;
        this._carGasAmount = carGasAmount;
    }

    public get capacity(): number {
        return this._capacity
    }

    public get carGasamount(): number {
        return this._carGasAmount
    }

    public refill(): void {
        this._carGasAmount += this._capacity
    }
}

let traki = new Car(160);
let trabi = new Car();
let shell = new Station;

shell.refillCar(traki);
shell.refillCar(trabi);

console.log(traki.carGasamount);
console.log(trabi.carGasamount);
console.log(shell.gasAmount);
