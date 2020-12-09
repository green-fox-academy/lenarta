'use strict';
import { Instrument } from './Instrument';

export abstract class StringedInstruments extends Instrument {

    protected _numberOfStrings: number;

    constructor(name: string, numberOfStrings: number) {
        super(name);
        this._numberOfStrings = numberOfStrings;
    }
    public sound() { };
}
