console.log(0 == -0); //true
console.log(0 === -0); //true
console.log(Object.is(0, -0)); //false

console.log("4", "1" == 1); //true
console.log("5", 1 === "1");
let workShop1 = {
  name: "Deep Js",
};
let workShop2 = {
  name: "Deep Js",
};
console.log(workShop1 == workShop2);
console.log(workShop1 === workShop2);

// == allows coercion (types different)
// === disallows coercion (types same)

console.log(5 == "5"); // true
// Explanation: The string "5" is converted to the number 5 before comparison.

console.log(null == undefined); // true
// Explanation: Both null and undefined are considered equal when using ==.

console.log(0 == false); // true
// Explanation: The number 0 is converted to false before comparison.

console.log(" " == 0); // true
// Explanation: The string " " (a space) is converted to 0 before comparison.
console.log("1" == true); // true, it coercion the values true into 1 and string 1 into number 1
console.log("1" === true); //false, it's check the data type
