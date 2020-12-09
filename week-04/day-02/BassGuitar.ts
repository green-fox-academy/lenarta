'use strict'

import { StringedInstruments } from './StringedInstruments';

export class BassGuitar extends StringedInstruments {

    protected _sounds: string;

    constructor(numberOfStrings?: number, sounds?: string) {
        super('BassGuitar', numberOfStrings || 4)
        this._sounds = sounds || 'Duum-duum-duum';
    }

    public sound(this: BassGuitar): string {
        return this._sounds
    }

    public play() {
        console.log(`${this._name}, ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    };
}
