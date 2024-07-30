// let a = {
//   name: "hello",
// };
// let b = {
//   name: "hello",
// };
// console.log(a == b); //false
// console.log(a === b); //false

// let num = 40;
// console.log(num); //40
// num++; //40
// console.log(num); //41
// ++num; //42
// console.log(num); //42

// let str40 = "40";
// console.log(str40 + 1); //"401"
// let str40Decrement = str40 - 1;
// console.log(str40Decrement); //39

// let zero = 0;
// console.log(x == null); //true

// let y = [];
// console.log(Array.isArray(y)); //true

// let x;
// console.log(x); //undefined

// let x = [];
// let y = x;
// let z = [];

// console.log(x == y); //true
// console.log(x == z); //false
// console.log(y == z); //false

// console.log(x === y); //true
// console.log(x === z); //false
// console.log(y === z); //false

// x.push(5);
// console.log(x); //[5]
// console.log(y); //[5]
// console.log(z); //[]

// console.log(Object.is(-0, 0)); //false

const str = "a";
console.log(+str); //NaN
console.log(Number(str)); //NaN
console.log(parseInt(str)); //Nan
console.log(parseFloat(str)); //NaN

console.log(1 < 2); //true
console.log(2 < 3); //true
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false

console.log(10 == 10); //true
console.log([] == true); //false

console.log(try2 == 10); //false
var try2 = 10;
console.log({} == true); //false

console.log(isNaN(NaN)); //true

console.log(undefined == null); //true

function fullName(first, second) {
  return function () {
    return first + second;
  };
}
console.log(fullName("uzair ", "ahmed")());

function multiply(first,second) {
  return function () {
    return first * second;
  };
}
// let value = multiply(10);
console.log(multiply(10,10)()); //100
