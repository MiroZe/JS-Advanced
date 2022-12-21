function sameNumbers(number) {
    number = String(number);
  
    let firstNumber = number[0];
    let sum = Number(firstNumber);
    let areAllSame = true;
    for (let i = 1; i < number.length; i++) {
      let currentNumber = number[i];
      sum += Number(currentNumber);
      if (currentNumber !== firstNumber) {
        areAllSame = false;
      }
    }
    console.log(areAllSame);
    console.log(sum);
  }
  sameNumbers(2222222)