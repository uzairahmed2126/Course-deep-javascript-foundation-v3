// 1.global scope
// var teacher = "Kyle";
// function otherClass() {
//   var teacher = "Suzy";
//   console.log("Welcome");
// }
// otherClass();
// 2. function scope
// function ask(name) {
//   return name;
// }
// console.log(ask("johnny"));

//3. block scope
// {
//   let a = 0;
// }

// lexical scope
// function outer(a) {
//   function inner(b) {
//     return a * b;
//   }
//   return inner; // Return the inner function itself
// }

// const multiply = outer(5); // Pass an argument to the outer function
// const result = multiply(3); // Call the inner function with an argument
// console.log(result); // Output: 15

//Imediate invoked function expression
// (function () {
//   console.log("hello");
// })();

// (function (a, b) {
//   console.log(a * b);
// })(10, 20);

// (function () {
//   let privateVariable = "I am private";
//   console.log(privateVariable);
// })();

let friendCircle = (function () {
  let friend = ["abdul musavvir"];
  return { goal, friendName, addFriend };
  function goal() {
    return "My Goal is to make a company";
  }
  function friendName() {
    return friend;
  }
  function addFriend(name) {
    let compare = [];
    if (name[0].includes(" ") || name[name.length - 1].includes(" ")) {
      return "Enter valid name";
    }
    if (friend.includes(name)) {
      return "Name is exist";
    } else {
      friend.push(name);
    }
    return name;
  }
})();
friendCircle.addFriend("sohail");
friendCircle.addFriend("sohail");
friendCircle.addFriend("yunus");
friendCircle.addFriend("sdf");
friendCircle.addFriend("hey");
friendCircle.addFriend("hey");
friendCircle.addFriend("hey");
friendCircle.addFriend("hey");
friendCircle.addFriend("hey");
friendCircle.addFriend("hey");
friendCircle.addFriend("hey");
friendCircle.addFriend("hey");
friendCircle.addFriend("hey");
console.log(friendCircle.friendName());
//(
// anonymous function
// let a = function () {
//   return "hello";
// };
// console.log(a());

// dynamic global variables
//"use strict"
//);
// var teacher = "kyle";
// function otherClass() {
//   teacher = "suzy";
//   topic = "react";
//   console.log(teacher); //suzy
// }
// console.log(teacher); //kyle
// otherClass();

// //LEXICAL ELEVATOR
// function step1() {
//   let a = "1";
//   function step2() {
//     let b = "2";
//     function step3() {
//       let c = "3";
//       console.log(a, b, c);
//     }
//     step3();
//     console.log(a, b);
//   }
//   step2();
//   console.log(a);
// }
// step1();

// function teacher() {}
// var myTeacher = function anotherTeacher(num) {
//   return num;
// };
// console.log(teacher);
// // console.log(myTeacher);
// function first() {
//   let a = 1;
//   function two() {
//     let b = 2;
//     function three() {
//       let c = 3;
//       console.log(a, b, c);
//     }
//     three();
//     console.log(a, b);
//   }
//   two();
//   return a;
// }
// console.log(first());
