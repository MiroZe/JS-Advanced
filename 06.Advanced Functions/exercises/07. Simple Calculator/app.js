function calculator() {
  let numberOneInput;
  let numberTwoInput;
  let resultInput;
  return {
    init: (input1, input2, result) => {
      numberOneInput = document.querySelector(input1);
      numberTwoInput = document.querySelector(input2);
      resultInput = document.querySelector(result);
    },
    add: () => {
      resultInput.value =
        Number(numberOneInput.value) + Number(numberTwoInput.value);
    },
    subtract: () => {
      resultInput.value =
        Number(numberOneInput.value) - Number(numberTwoInput.value);
    },
  };
}
const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
