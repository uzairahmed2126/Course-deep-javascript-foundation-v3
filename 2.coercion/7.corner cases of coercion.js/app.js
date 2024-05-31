// console.log(Number(""));
// console.log(Number("  \t\n"));
console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number([undefined]));
// console.log(Number([]));
// console.log(Number([1, 2, 3]));
// console.log(Number([null]));
console.log(Number({}));
console.log(String(-0)); //0
console.log(String(null));
// console.log(String(undefined));
// console.log(String([null])); //""
// console.log(String([undefined])); //""
// console.log(Boolean(new Boolean(false)));
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(1 < 2 && 2 < 3);
// console.log(1 < 2 < 3); //1<2 true and true evaluates 1 and 1<3 is true
// console.log(1 < 2 < 3);
// console.log(true < 3);
// console.log(1 < 3);
// console.log(3 > 2);
// console.log(2 > 1);
// console.log(2 > true);
// console.log(3 > 2 > 1);
// console.log(3 > 2 > true); //3>2 is true and true greater than true is false
// console.log(3 > 2 > 1);
// console.log(true > 1);
// console.log(1 > 1);
// console.log(Number(1) > Number(1));
function isValidName(name) {
  if (typeof name === "string" && name.trim().length >= 3) {
    return true;
  }
  return false;
}
console.log(isValidName("fss"));
console.log(isValidName("fss"));

