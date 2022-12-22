function sumFirstAndLastNumbers(input) {
  let firstNumber = Number(input.shift());
  let lastNumber = Number(input.pop());
  let sum = firstNumber + lastNumber;
  return sum;
}
sumFirstAndLastNumbers(["20", "30", "40"]);
