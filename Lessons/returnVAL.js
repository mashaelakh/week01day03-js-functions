const five = function () {
  return 2 + 3;
}

const add = function (a, b) {
  return a + b;
}

const adder = function (a, b) {
  a + b // returns undefined, not the sum of a + b
}

const fiveSum = five(); // 5

const addSum = add(5,10); // 15

const adderSum = adder(5,10) // undefined