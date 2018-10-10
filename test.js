const adder = (num1) => {
  return function (num2) {
    return num1+num2;
  }
}
const add5 = adder(5);
console.log(add5(4)) // 9
const add9 = adder(9);
console.log(add9(4)) // 13
