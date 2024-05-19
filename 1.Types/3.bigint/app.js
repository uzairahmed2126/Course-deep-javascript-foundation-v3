let n = 111111111111112222243n;
console.log(typeof n);

let bigint = 111111111111112222243n;
console.log(typeof bigint);

let num = 12;
console.log(typeof num);

const previouslyMaxSafeInteger = 9007199254740991n;
console.log(previouslyMaxSafeInteger);

const alsoHuge = BigInt(9007199254740991);
console.log(alsoHuge); // 9007199254740991n

const hugeString = BigInt("9007199254740991");
console.log(hugeString); // 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
console.log(hugeHex); // 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
console.log(hugeOctal); // 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111"
);
console.log(hugeBin); // 9007199254740991n
