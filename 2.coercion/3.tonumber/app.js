// console.log(Number("")); //0
// console.log(Number("0")); //0
// console.log(Number("-0")); //-0
// console.log(Number(" 009")); //9
// console.log(Number("2.1133")); //2.1133
// console.log(Number("0.")); //0
// console.log(Number(".0")); //0
// console.log(Number(".")); //NaN
// console.log(Number("0xaf")); //175
// console.log(Number(false)); //0
// console.log(Number(true)); //1
// console.log(Number(null)); //0
// console.log(Number(undefined)); //NaN
// console.log(Number({ 1: 1 })); //NaN
// console.log(Number([1, 2, 3])); //NaN
// console.log(Number(100n)); //100
// console.log(Number("0xee")); //238
// console.log(Number("0x11")); //17
// console.log(Number("-Infinity")); //-Infinity
// let str = "10";
// console.log(+str); //10
// console.log(typeof +str); //number

// console.log(+!null - true); //1-1=0
// console.log(+undefined);

// let arr = [, , ["-0"], [null], [undefined], [1, 2, 3], [[[[]]]]];

console.log(Number([""]));
console.log(Number(["0"]));
console.log(Number(["-0"]));
console.log(Number([null]));
console.log(Number([undefined]));
console.log(Number([1,2,3]));
console.log(Number([[[[]]]]));