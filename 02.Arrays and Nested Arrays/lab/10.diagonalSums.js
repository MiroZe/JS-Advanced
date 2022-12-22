function diagonalSums(input) {
    let mainIndex = 0;
    let firstRow = input[mainIndex];
    let secondaryIndex = input[0].length - 1;

    let leftSum = 0;
    let rightSum = 0;

    for (let row = 0; row < input.length; row++) {


        leftSum += input[row][mainIndex];
        rightSum += input[row][secondaryIndex];

        mainIndex++;
        secondaryIndex--

    }

    console.log(leftSum + ' ' + rightSum);

}
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   
)