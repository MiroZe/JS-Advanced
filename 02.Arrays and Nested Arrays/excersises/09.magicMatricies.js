function magicMatricies(input) {
  let firstRowSum = input[0].reduce((a, b) => a + b);
  let currentColumnSum = 0;

  for (let i = 0; i < input.length; i++) {
    let currentRowSum = input[i].reduce((a, b) => a + b);
    if (currentRowSum !== firstRowSum) {
      return false;
    } else {
      for (let m = 0; m < input.length; m++) {
        currentColumnSum += input[m][i];
      }
      if (currentColumnSum !== firstRowSum) {
        return false;
      } else {
        currentColumnSum = 0;
      }
    }
  }
  return true;
}
console.log(
  magicMatricies([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
