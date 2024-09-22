function Car() {}
const car1 = new Car();
const car2 = new Car();
console.log(car1.name); //undefined
Car.prototype.name = "Original Name";
Car.prototype.color = "Original Color";
function first(name, color) {
  car1.name = name;
  car1.color = color;
  return `Car Name is : ${name} and Car colour is : ${color}`;
}
function second(name, color) {
  car1.name = name;
  car1.color = color;
  return `Car Name is : ${name} and Car colour is : ${color}`;
}
console.log(first("audi", "white"));
console.log(second("hundai", "aqua green"));

class Employee {
  constructor() {
    this.id = null;
    this.name = null;
    this.skill = null;
  }

  getData(id, name, skill) {
    this.id = id;
    this.name = name;
    this.skill = skill;
  }

  showData() {
    console.log(
      `Employee ID: ${this.id} \nEmployee NAME: ${this.name} \nEmployee SKILL: ${this.skill}`
    );
  }
}

let person1 = new Employee(); // Create a new instance of Employee
person1.getData(1, "Uzair", "Frontend");
person1.showData();

let person2 = new Employee(); // Create another instance for person2
person2.getData(2, "John", "Backend");
person2.showData();

let person3 = new Employee(); // Create another instance for person3
person3.getData(3, "Alice", "Fullstack");
person3.showData();
console.log(data1.addName("uzair", "ahmed"));
