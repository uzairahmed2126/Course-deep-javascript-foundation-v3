// // let a = {
// //   name: "hello",
// // };
// // let b = {
// //   name: "hello",
// // };
// // console.log(a == b); //false
// // console.log(a === b); //false

// // let num = 40;
// // console.log(num); //40
// // num++; //40
// // console.log(num); //41
// // ++num; //42
// // console.log(num); //42

// // let str40 = "40";
// // console.log(str40 + 1); //"401"
// // let str40Decrement = str40 - 1;
// // console.log(str40Decrement); //39

// // let zero = 0;
// // console.log(x == null); //true

// // let y = [];
// // console.log(Array.isArray(y)); //true

// // let x;
// // console.log(x); //undefined

// // let x = [];
// // let y = x;
// // let z = [];

// // console.log(x == y); //true
// // console.log(x == z); //false
// // console.log(y == z); //false

// // console.log(x === y); //true
// // console.log(x === z); //false
// // console.log(y === z); //false

// // x.push(5);
// // console.log(x); //[5]
// // console.log(y); //[5]
// // console.log(z); //[]

// // console.log(Object.is(-0, 0)); //false

// const str = "a";
// console.log(+str); //NaN
// console.log(Number(str)); //NaN
// console.log(parseInt(str)); //Nan
// console.log(parseFloat(str)); //NaN

// console.log(1 < 2); //true
// console.log(2 < 3); //true
// console.log(1 < 2 < 3); //true
// console.log(3 > 2 > 1); //false

// console.log(10 == 10); //true
// console.log([] == true); //false

// console.log(try2 == 10); //false
// var try2 = 10;
// console.log({} == true); //false

// console.log(isNaN(NaN)); //true

// console.log(undefined == null); //true

// function fullName(first, second) {
//   return function () {
//     return first + second;
//   };
// }
// console.log(fullName("uzair ", "ahmed")());

// function multiply(first,second) {
//   return function () {
//     return first * second;
//   };
// }
// // let value = multiply(10);
// console.log(multiply(10,10)()); //100

// dynamic global variables
// "use strict"
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
// console.log(myTeacher);
function first() {
  let a = 1;
  function two() {
    let b = 2;
    function three() {
      let c = 3;
      console.log(a, b, c);
    }
    three();
    console.log(a, b);
  }
  two();
  return a;
}
console.log(first());

// var clickHandler = function () {

// };

var keyHandler = function keyHandler(x) {
  return x;
}
console.log(keyHandler(10));