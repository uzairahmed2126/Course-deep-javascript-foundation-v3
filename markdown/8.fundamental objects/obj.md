# Fundamental fo objects.
### We can create our own object with the help of `this` keyword and we can access it with the help of `new` keyword.
**Example:**
```js
function myObj(firstName,lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}
const obj1 = new myObj('john','doe',1950);
console.log(obj1);//myObj { firstName: 'john', lastName: 'doe', dob: 1950 }
console.log(obj1.dob);//1950
```
#### [Click and see code](/1.Types/8.fundamental%20objects/app.js)