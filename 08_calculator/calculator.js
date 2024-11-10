const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
	let result = 0;
  for(let num of arr) {
    result += num;
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for(let num of arr) {
    result *= num;
  }
  return result;
};

const power = function(num, pow) {
	let result = 1;
  while(pow > 0) {
    pow--;
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
	while(num > 0) {
    result *= num;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
