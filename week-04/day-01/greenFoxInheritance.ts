"use strict";

export class Person {
  protected _name: string;
  protected _age: number;
  protected _gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this._name = name || "Jane Doe"; // ?? doesn't work
    this._age = age || 30;
    this._gender = gender || "female";
  }

  introduce() {
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} `);
  }
  getGoal(): void {
    console.log(`My goal is: Live for the moment!`);
  }
}

/*
let person = new Person;
console.log(person.introduce());
person.getGoal();
*/

export class Student extends Person {
  protected _previousOrganization: string;
  protected _skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string, skippedDays?: number) {
    super(name, age, gender);
    this._previousOrganization = previousOrganization || "The School of Life";
    this._skippedDays = skippedDays || 0;
  }

  getGoal(): void {
    console.log(`My goal is: Be a junior software developer.`);
  }
  introduce() {
    console.log(`${super.introduce()}from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`);
  }
  skipDays(numberOfDays: number) {
    this._skippedDays += numberOfDays;
  }
}

/*
let person = new Student();
person.introduce();
person.skipDays(2);
console.log(person)
console.log(person.introduce());
*/

export class Mentor extends Person {
  protected _level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    this._level = level || `intermediate`;
  }

  getGoal(): void {
    console.log(`My goal is: Educate brilliant junior software developers`);
  }
  introduce() {
    console.log(`${super.introduce()} ${this._level} mentor.`);
  }
}

/*
let person = new Mentor;
person.introduce();
console.log(person.introduce());
*/

export class Sponsor extends Person {
  protected _company: string;
  protected _hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company?: string, hiredStudents?: number) {
    super(name, age, gender);
    this._company = company || `Google`;
    this._hiredStudents = hiredStudents || 0;
  }

  introduce() {
    console.log(`${super.introduce()} who represents ${this._company} and hired ${this._hiredStudents} students so far.`);
  }
  hire(numberOfStudents?: number) {
    this._hiredStudents += numberOfStudents;
  }
  getGoal(): void {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }
}

/*
let person = new Sponsor;
person.hire(2);
console.log(person.introduce());
*/

export class Cohort {
  protected _name: string;
  protected _students: Student[];
  protected _mentors: Mentor[];

  constructor(name: string) {
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  addStudent(student: Student) {
    this._students.push(student);
  }
  addMentor(mentor: Mentor) {
    this._mentors.push(mentor);
  }
  info() {
    console.log(
      `The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length}  mentors`);
  }
}


let ego = new Cohort("Ego");
let student = new Student("Feri");
console.log(student);
ego.addStudent(student);
ego.info();

