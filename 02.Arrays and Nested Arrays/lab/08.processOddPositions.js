function processOddPositions(input) {

    let result = input.filter((el,index) => index % 2 !== 0).map(el => el*=2).reverse();
   
    return console.log(result.join(' '));

}
processOddPositions([3, 0, 10, 4, 7, 3])