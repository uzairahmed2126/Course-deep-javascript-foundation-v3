// Class for employee
class Employee {
  constructor(id, name, skill, address, mobileNumber) {
    this.id = id;
    this.name = name;
    this.skill = skill;
    this.address = address;
    this.mobileNumber = mobileNumber;
  }

  message() {
    return "Enter id, name, skill, address, and mobile number";
  }
}

class Data {
  constructor() {
    this.employees = [];
  }

  getData(employee) {
    this.employees.push([
      employee.id,
      employee.name,
      employee.skill,
      employee.address,
      employee.mobileNumber,
    ]);
  }

  showData() {
    return this.employees;
  }
}
let message = new Employee();
console.log(message.message());

let person1 = new Employee(
  1,
  "Uzair",
  "Frontend Developer",
  "Jodhpur",
  "0987654321"
);
let person2 = new Employee(
  2,
  "Abdul Salam",
  "All Rounder",
  "Jodhpur",
  "0987653323"
);
let employeeData = new Data();

employeeData.getData(person1);
employeeData.getData(person2);
let boundShowData = employeeData.showData.bind(employeeData);

console.log(boundShowData());
