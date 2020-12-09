'use strict';

export class Student extends Teacher {



    public learn(): void {
        console.log('The student is learning something new');
    }
    public question() {
        console.log(Teacher.answer());
    }
}

export class Teacher extends Student {


    public answer() {
        console.log('The teacher is answering a question');
    }
    public teach() {
        console.log(Student.learn()); //getter?

    }
}
let a = new Student;
a.learn();
a.question();

let b = new Teacher;
b.answer();
b.teach();
