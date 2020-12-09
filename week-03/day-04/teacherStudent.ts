'use strict';

export class Student {

    public learn(): void {
        console.log('The student is learning something new');
    }
    public question(teacher: Teacher) {
        teacher.answer();
    }
}

export class Teacher {

    public answer() {
        console.log('The teacher is answering a question');
    }
    public teach(student: Student) {
        student.learn();
    }
}

let a = new Student;
let b = new Teacher;

a.learn();
a.question(b);

b.answer();
b.teach(a);
