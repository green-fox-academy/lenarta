export class Car {

    private _fuelLevel: number;
    private _capacity: number;
    private _amortizalodas: number;
    private _type: string;


    constructor(capacity: number, fuelLevel: number, type?: string) {
        if (capacity === 0) {
            this._capacity = 100;
        } else {
            this._capacity = 100;
        }
        this._fuelLevel = fuelLevel;
        this._type = type;
        this._amortizalodas = 10;
    }


    public isFull(): boolean {
        return this._fuelLevel === this._capacity;
    }

    public fill(amount: number): void {
        this._fuelLevel += amount;
        this._amortizalodas++;
    }

    public get fuelLevel(): number {
        return this._fuelLevel;
    }

    public set fuelLevel(fuelLevel: number) {
        this._fuelLevel = fuelLevel;
    }

    public drive(): void {
        if (this._fuelLevel < 50) {
            console.log('nincs brumbrum, mert nincs elegendo benzined')
        }
        else {
            console.log('brumbrumbrumbrumbrum');
            this._fuelLevel -= 50;
        }
    }


}
let audi = new Car(1, 10,);
console.log(audi)
audi.drive();

console.log(audi)

