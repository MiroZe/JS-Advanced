function biggestElement(input) {
    let biggest = [];
    for ( let element of input) {
        let biggestNumber = element.sort((a,b) => b -a).shift();
        biggest.push(biggestNumber)

        
    }

console.log(biggest.sort((a,b) => b - a).shift());
}
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])
