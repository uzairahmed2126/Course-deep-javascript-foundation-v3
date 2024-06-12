function plusPlus(orig_x) {
  let originalNumberCoreced = Number(orig_x);
  x = originalNumberCoreced + 1;
  return originalNumberCoreced;
}
let x = "5";
console.log(plusPlus(x));//5
console.log(x);//6