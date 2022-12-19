function agregatElements(input) {
    let sum = 0;
    let inversedSum = 0;
  
    let arr = input.map((el) => (sum += el));
    let inv = input.map((el) => (inversedSum += 1 / el));
    console.log(sum);
    console.log(inversedSum);
    console.log(input.join(""));
  }
  agregatElements([1,2,3,4])