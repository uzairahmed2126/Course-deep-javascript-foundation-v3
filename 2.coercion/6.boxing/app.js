// In JavaScript, **boxing** is the process of converting a primitive value into an object so that it can be treated like an object. This is necessary because primitive values (like numbers, strings, and booleans) are not objects and do not have methods or properties. However, JavaScript automatically wraps these primitive values in their corresponding object wrappers when necessary, allowing you to use methods and properties on them.

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