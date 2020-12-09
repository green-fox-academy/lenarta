'use strict'

import { StringedInstruments } from './StringedInstruments';

export class ElectricGuitar extends StringedInstruments {

    protected _sounds: string;

    constructor(numberOfStrings?: number, sounds?: string) {
        super('Electric Guitar', numberOfStrings || 6)
        this._sounds = sounds || 'Twang';
    }

    public sound(this: ElectricGuitar): string {
        return this._sounds
    }

    public play() {
        console.log(`${this._name}, ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    };
}