// const negativeZero = -0;
// console.log(negativeZero === -0); //it's not a correct answer

// console.log(Object.is(negativeZero, -0)); //true

// console.log(negativeZero > 0);
// console.log(negativeZero < 0);
// console.log(negativeZero === 0); //it's true but it's not true it is false
// console.log()
function hell(a, b) {
  if (typeof a !== "string" && typeof b !== "number") {
    return "check";
  } else {
    return a + b + " Successfully work";
  }
}
console.log(hell("", "23"));
