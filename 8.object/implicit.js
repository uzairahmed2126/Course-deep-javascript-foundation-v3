// let uzair = {
//   name: " uzair",
//   getName: function () {
//     console.log(this.name);
//   },
// };
// uzair.getName();
// function addLast() {
//   this.name += " Ahmed";
//   console.log(this.name);
// }
// addLast.call(uzair);

// let studentName = {
//   firstName: "Abdul",
//   getName: function () {
//     console.log(this.firstName);
//   },
// };
// studentName.getName();

// function addLastName(name) {
//   this.name = name;
//   console.log(this.name);
// }
// addLastName.call(studentName, "Salam");

// class naam {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   getName() {
//     return this.fullName();
//   }
// }
// let data = new naam("uzair", "ahmed");

// console.log(data.getName());
// implicit binding
// let implicitBinding = {
//   firstName: "john",
//   getName: function () {
//     console.log(this.firstName);
//   },
// };
// implicitBinding.getName();

// explicit binding
// let explicitBinding = {
//   name: "",
//   age: "",
//   personDetails: function (name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(`Name is ${this.name} age is ${this.age}`);
//   },
// };
// function ageDouble() {
//   this.age = 2 * this.age;
//   console.log(this.age);
// }
// explicitBinding.personDetails("uzair", 20);
// ageDouble.call(explicitBinding);

// // hardbinding without bind keyword
// let hardbinding = {
//   conunter: 1,
//   addOne: function () {
//     console.log((this.conunter += 1));
//   },
// };
// setTimeout(function () {
//   hardbinding.addOne();
// }, 4000); //2

// // hardbinding
// let hardbindingWithKeyWord = {
//   conunter: 1,
//   addOne: function () {
//     console.log((this.conunter += 1));
//   },
// };
// setTimeout(hardbindingWithKeyWord.addOne.bind(hardbindingWithKeyWord), 2000); //2

let cartoon = {
  cartoonName: "Doraemone",
  addCharachterName: function (name) {
    console.log((this.name = name));
  },
  concatName: function () {
    console.log(`${this.cartoonName} is a friend of ${this.addCharachterName}`);
  },
};
// cartoon.addCharachterName("nobita");
cartoon.concatName();
