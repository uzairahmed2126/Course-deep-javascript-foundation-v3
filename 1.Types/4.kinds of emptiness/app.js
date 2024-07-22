// let x;
// console.log(x); //undefined
// // console.log(a);//ReferenceError: a is not defined
// //const b;//SyntaxError: Missing initializer in const declaration
// try {
//   console.log(a); //ReferenceError: a is not defined
// } catch (e) {
//   console.log("Undeclared variable error:", e.message);
// }

// try {
//   console.log(x1); // ReferenceError
// } catch (e) {
//   console.log(e); // ReferenceError: x is not defined
// }
let a = 10;
if (a === 10) {
  let a = 1;
  console.log(a);
}
console.log(a);

const one = 1;
if (one === 1) {
  const one = 2;
  console.log(one);
}
console.log(one);


