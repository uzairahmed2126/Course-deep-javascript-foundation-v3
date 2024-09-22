//  this keyword in JavaScript dynamically refers to the context in which a function is invoked.
// Library system object
const library = {
  name: "Central Library",
  book: "JavaScript: The Good Parts",

  issueBook() {
    console.log(`Issuing ${this.book} from ${this.name}`);
  },
};

library.issueBook(); // 'Issuing JavaScript: The Good Parts from Central Library'

// Trying to issue a book by extracting the function outside here if the issuBook is call then the explicit binding will
const issueBookOutside = library.issueBook;
issueBookOutside(); // 'Issuing undefined from undefined' (this refers to global context)

// Using call() to explicitly bind `this` to the library object
issueBookOutside.call(library); // 'Issuing JavaScript: The Good Parts from Central Library'

// Using a constructor function to create multiple library objects
function Library(name, book) {
  this.name = name;
  this.book = book;
}

Library.prototype.issueBook = function () {
  console.log(`Issuing ${this.book} from ${this.name}`);
};

const cityLibrary = new Library("City Library", "Eloquent JavaScript");
cityLibrary.issueBook(); // 'Issuing Eloquent JavaScript from City Library'

// Using arrow function inside a method (arrow function will not have its own `this`)
const libraryWithArrowFunction = {
  name: "University Library",
  book: "You Don't Know JS",

  issueBook: () => {
    console.log(`Issuing ${this.book} from ${this.name}`);
  },
};

libraryWithArrowFunction.issueBook(); // 'Issuing undefined from undefined' (Arrow function takes `this` from global context)

// using object
const obj = {
  name: "John",
  greet() {
    console.log(this.name); // 'this' refers to obj
  },
};
obj.greet(); // Output: John

// using constructor function
function addName(name) {
  this.name = name;
}
let myName = new addName("uzair");
console.log(myName.name); //uzair

// using class
class employee {
  constructor(id, name, work) {
    this.id = id;
    this.name = name;
    this.work = work;
  }
}
class employeeData {
  constructor() {
    this.employees = [];
  }
  addEmpName(id, name, skill) {
    this.employees.push(new employee(id, name, skill));
  }
  deleteDataOnId(id, name, skill) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }
  showData() {
    this.employees.map((data) => {
      console.log(
        `id is ${data.id} name is ${data.name} and skill is ${data.skill}`
      );
    });
  }
}
let employeeList = new employeeData();
employeeList.addEmpName(1, "uzair", "frontend developer");
employeeList.addEmpName(2, "ahmed", "frontend developer");
employeeList.addEmpName(3, "saleh", "full stack developer");
employeeList.addEmpName(
  4,
  "meekail",
  "mern stack developer and senior of uzair ahmed"
);
employeeList.deleteDataOnId(2);
employeeList.showData();
