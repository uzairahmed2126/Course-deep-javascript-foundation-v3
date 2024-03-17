function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);
const car2 = new Car('hell', 'o', 2003);

console.log(car1.make);
console.log(car2.make, car2.model, car2.year);

let yesterday = new Date('march 6 ,2019');
yesterday.toUTCString();
// let myGPA = String(transcript.gpa)


class person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const p = new person('john');
p.greet()

class myClass {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    input(a, b) {
        console.log(a + b);
    }
}
const value = new myClass();
value.input(1, 2);



