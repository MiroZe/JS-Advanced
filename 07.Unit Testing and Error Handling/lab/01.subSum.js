function sum(array, startIndex,lastIndex) {

    if(!Array.isArray(array)) {
        return NaN
    }
    if(startIndex < 0) {
        startIndex = 0;
    }
    if (lastIndex > array.length - 1) {
        lastIndex = array.length -1;
    }
    

    let result = array.slice(startIndex,lastIndex+1)
                .map(Number)
                .reduce((acc,el) => acc +=el,0);
    return result


}
console.log(sum([10, 'twenty', 30, 40], 0, 2))