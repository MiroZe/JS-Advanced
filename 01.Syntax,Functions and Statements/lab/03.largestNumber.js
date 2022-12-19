function largestNumber(numOne,numTwo,numThree) {
    let biggestNumber;

if(numOne >= numTwo && numOne >= numThree) {
    biggestNumber = numOne
} else if ( numTwo >= numOne && numTwo >= numThree ) {
    biggestNumber = numTwo;
} else {
    biggestNumber = numThree;
}
console.log(`The largest number is ${biggestNumber}.`);

}
largestNumber(-3, -5, -22.5)