let a = {
  name: "hello",
};
let b = {
  name: "hello",
};
console.log(a == b); //false
console.log(a === b); //false

let num = 40;
console.log(num); //40
num++; //40
console.log(num); //41
++num; //42
console.log(num); //42

let str40 = "40";
console.log(str40 + 1); //"401"
let str40Decrement = str40 - 1;
console.log(str40Decrement); //39
