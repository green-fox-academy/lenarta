class Student {

    constructor() { }

    public learn(): void {
        console.log('The student is learning something new');
    }
    public question() {
        return teacher.answer();
    }
}

class Teacher {

    constructor() { }

    public answer(): void {
        console.log('The teacher is answering a question');
    }
    public teach() {
        return student.learn();
    }
}

let teacher = new Teacher();
let student = new Student();

console.log(student.question());
console.log(teacher.teach());


