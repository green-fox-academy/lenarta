"use strict";

export class Person {
    protected _name: string;
    protected _age: number;
    protected _gender: string;

    constructor(name?: string, age?: number, gender?: string) {
        this._name = name || 'Jane Doe';
        this._age = age || 30;
        this._gender = gender || 'female';
    }
    introduce() {
        return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender}`;
    }
    getGoal(): void {
        console.log(`My goal is: Live for the moment!`);
    }
}


export class Student extends Person {
    protected _previousOrganization: string;
    protected _skippedDays: number;

    constructor(previousOrganization?: string, skippedDays = 0, name?: string, age?: number, gender?: string) {
        super(name, age, gender);
        this._previousOrganization = previousOrganization || 'The School of Life';
        this._skippedDays = skippedDays || 0;
    }
    getGoal(): void {
        console.log(`My goal is: Be a junior software developer.`);
    }
    introduce() {
        return `${super.introduce()}from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`;
    }
    skipDays(numberOfDays: number) {
        this._skippedDays += numberOfDays;
    }
}

export class Mentor extends Person {
    protected _level: string;

    constructor(level?: string, name?: string, age?: number, gender?: string) {
        super(name, age, gender);
        this._level = level || `intermediate`;
    }
    getGoal(): void {
        console.log(`My goal is: Educate brilliant junior software developers`);
    }
    introduce() {
        return `${super.introduce()} ${this._level} mentor.`;
    }
}

export class Sponsor extends Person {
    protected _company: string;
    protected _hiredStudents: number;

    constructor(hiredStudents?: number, company?: string, name?: string, age?: number, gender?: string) {
        super(name, age, gender);
        this._company = company || `Google`
        this._hiredStudents = hiredStudents || 0;
    }
    introduce() {
        return `${super.introduce()} who represents ${this._company} and hired ${this._hiredStudents} students so far.`
    }
    hire(numberOfStudents: number) {
        this._hiredStudents += numberOfStudents;
    }
    getGoal(): void {
        console.log(`My goal is: Hire brilliant junior software developers.`);
    }
}

let person = new Sponsor(); // ?? -vel nem működik
person.hire(2);
console.log(person.introduce());


