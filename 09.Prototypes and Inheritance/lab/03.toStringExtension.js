function toStringExtension () {

class Person {
    constructor(name,email) {
        this.name = name
        this.email = email
    }
    toString() {
        return `Person (name: ${this.name}, email: ${this.email})`
    }
}
class Student extends Person{
    constructor(name, mail, course ) {
        super(name,mail);
        this.course = course
    }
    toString() {
        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
    }
}
class Teacher extends Person{
    constructor(name, mail, subject ) {
        super(name,mail);
        this.subject = subject
    }
    toString() {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
    }
}

return {
    Person,
    Teacher,
    Student
}

}