// let uzair = {
//   name: " uzair",
//   getName: function () {
//     console.log(this.name);
//   },
// };
// uzair.getName();
// function addLast() {
//   this.name += " Ahmed";
//   console.log(this.name);
// }
// addLast.call(uzair);

let obj = {
  name: "john",
  getName: function () {
    console.log(this.name);
  },
};
function addName(lastName) {
  this.name =  lastName;
}
addName.call(obj.getName.call(addName("uzair")));
