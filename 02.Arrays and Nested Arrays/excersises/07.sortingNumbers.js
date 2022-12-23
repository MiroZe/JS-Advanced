function sortingNumbers(input) {

    let result = [];
    input.sort((a,b) => a-b);
    //[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
    for ( let elements of input) {
        result.push(input.shift());
        result.push(input.pop());
    }
    result.push(input.shift());
    result.push(input.pop());
return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])