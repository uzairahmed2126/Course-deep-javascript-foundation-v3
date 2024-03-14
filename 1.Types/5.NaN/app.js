let a = 'asdf';
console.log(isNaN(a));//true

let b = 123;
console.log(NaN !== b);//true

console.log(isNaN('123'));//false

const age = Number('0o24');
console.log(age);

let mycatsAGe = Number('n/a');
console.log(Number.isNaN(mycatsAGe))