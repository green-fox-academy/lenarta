'use strict'

import { StringedInstruments } from './StringedInstruments';

export class Violin extends StringedInstruments {

    protected _sounds: string;

    constructor(numberOfStrings?: number, sounds?: string) {
        super('Violin', numberOfStrings || 4)
        this._sounds = sounds || 'Screech';
    }
    public play() {
        console.log(`${this._name}, ${this._numberOfStrings}-stringed instrument that goes ${this._sounds}`);
    };
}
