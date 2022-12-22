function negativeAndPositive(input) {

let newArray = [];
for( let element of input) {
    if (element < 0) {
        newArray.unshift(element)
    } else {
        newArray.push(element)
    }
}
newArray.forEach(el => console.log(el))
}
negativeAndPositive([3, -2, 0, -1])