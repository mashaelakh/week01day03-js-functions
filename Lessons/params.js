const zero = function () {
  return 0
}

// You call this function by writing: `zero()`

const one = function (param) {
  return param
}

// You call this function by writing: `one('argumentExample')`

const three = function (param1, param2, param3) {
  return param2
}

// You call this function by writing: `three(1, 'two', false)`

// What would happen if we called this function using only one argument?

console.log(three(1)) // ?