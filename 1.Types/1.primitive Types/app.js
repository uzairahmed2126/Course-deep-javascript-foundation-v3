let num = 10;
let str = "Hello, world!";
let bool = true;
let n = null;
let undef;
let sym = Symbol("foo");
let bigInt = 9007199254740991n;

console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Null:", n);
console.log("Undefined:", undef);
console.log("Symbol:", sym);
console.log("BigInt:", bigInt);

const sym1 = Symbol("sym2");
const sym2 = Symbol("sym2");
console.log(sym1 === sym2);

// non-primitive
let arr = [];
let obj = {};
let fn = function () {
  return "function";
};
console.log("array:", arr);
console.log("object:", obj);
console.log("function:", fn());
