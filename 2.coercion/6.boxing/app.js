// boxing is the process of converting a primitive value into an object. it's treated like an object
let num = 12;
console.log(num.toFixed(2)); //12.00

let string = "223";
console.log(string.slice(-2)); //23


let primitiveBoolean = false;

let boxedBoolean = new Boolean(primitiveBoolean);

console.log("Boxed Boolean:", boxedBoolean); // [Boolean: false]
console.log("Type of boxedBoolean:", typeof boxedBoolean); // "object"

let unboxedBoolean = boxedBoolean.valueOf();
console.log("Unboxed Boolean:", unboxedBoolean); // false
console.log("Type of unboxedBoolean:", typeof unboxedBoolean); // "boolean"