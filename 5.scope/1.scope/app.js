// 1.global scope
var teacher = "Kyle";
function otherClass() {
  var teacher = "Suzy";
  console.log("Welcome");
}
otherClass();
// 2. function scope
function ask(name) {
  return name;
}
console.log(ask("johnny"));

//3. block scope
{
  let a = 0;
}

// lexical scope
function outer(a) {
  function inner(b) {
    return a * b;
  }
  return inner; // Return the inner function itself
}

const multiply = outer(5); // Pass an argument to the outer function
const result = multiply(3); // Call the inner function with an argument
console.log(result); // Output: 15
