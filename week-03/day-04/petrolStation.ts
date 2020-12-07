class Station {
    public _gasAmount: number = 1000;

    constructor() { }

    public refill(_capacity: Car) {
        return (
            this._gasAmount - new Car()._capacity,
            (new Car()._carGasAmount = new Car()._capacity)
        );
    }
}

class Car {
    public _capacity: number;
    public _carGasAmount: number;

    constructor(capacity: number = 100, carGasAmount: number = 0) {
        this._capacity = capacity;
        this._carGasAmount = carGasAmount;
    }
}

let audi = new Car();
console.log();

Station.call(refill(audi._capacity));
