let numStudents = 15;
console.log(`there are ${numStudents + ""} students`);
console.log(`${numStudents} students`);
console.log(+""); //0
console.log(+" "); //0

let studentsInputElem = 15;
function addAStudent(numStudents) {
  return numStudents - 1;
}
console.log(addAStudent(studentsInputElem));

console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(" "));

// corner case
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(1 < 2 < 3); //true
console.log(1 < 2 < 3); //true
console.log(true < 3); //true
console.log(1 < 3); //true
console.log(3 > 2); //true
console.log(2 > 1); //true
console.log(3 > 2 > 1); //false
console.log(3 > 2 > 1); //false
console.log(true > 1); //false
console.log(1 > 1); //false
console.log(1 > 1); //false
console.log(-"1");
