function animal(name) {
    this.name = name;
}
const animal1 = new animal('lion');
animal.prototype.toString = function animalToString() {
    return this.name;
};
console.log(animal1.toString());
let arr = [122];
console.log(typeof arr);//"object"
console.log(arr.toString());//"122"
let a = Object.prototype.toString.call(arr);
console.log(a);//"[object Array]"

const toString = Object.prototype.toString;

console.log(toString.call(new Date())); // [object Date]
console.log(toString.call(new String())); // [object String]
// Math has its Symbol.toStringTag
console.log(toString.call(Math)); // [object Math]

console.log(toString.call(undefined)); // [object Undefined]
console.log(toString.call(null)); // [object Null]
console.log(toString.call(Boolean)); // [object Function]


// const myDate = new Date();
// console.log(Object.prototype.toString.call(myDate)); // [object Date]

// myDate[Symbol.toStringTag] = "myDate";
// console.log(Object.prototype.toString.call(myDate)); // [object myDate]

// Date.prototype[Symbol.toStringTag] = "prototype polluted";
// console.log(Object.prototype.toString.call(new Date())); // [object prototype polluted]

class animal2 {
    constructor(name, breed, color, sex) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.sex = sex;
    }
    toString() {
        return `Animal ${this.name} is a ${this.sex} ${this.color} ${this.breed}`
    }
}
const anim1 = new animal2('giraf', 'normal', 'orange', 'male');
const anim2 = new animal2('lion', 'normal', 'white', 'male');
console.log(anim1.toString());
console.log(anim2.toString());
