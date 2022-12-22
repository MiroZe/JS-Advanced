function biggerHalf(input) {
    let halfLength = Math.floor(input.length / 2)
    input.sort((a,b) => a-b);
    let result = input.slice(halfLength);
    return result;
    

}
biggerHalf([3, 19, 14, 7, 2, 19, 6])