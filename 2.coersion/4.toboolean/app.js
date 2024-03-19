console.log(Boolean('foo'));//true
console.log(Boolean(21));//true
console.log(Boolean({}));//true
console.log(Boolean([]));//true
console.log(Boolean(true));//true
console.log(Boolean(function () { }));//true
console.log(Boolean('0'));//true
console.log(Boolean(BigInt));//true
console.log(Boolean(Symbol));//true
console.log(Boolean(0n));//false
console.log(Boolean(''));//false
console.log(Boolean(false));//false
console.log(Boolean(0));//false
console.log(Boolean(false));//false
console.log(Boolean(-0));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false

