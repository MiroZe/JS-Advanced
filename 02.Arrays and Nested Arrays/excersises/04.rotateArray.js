function rotateArray(arr, rotation) {

for ( let i = 0; i < rotation; i++) {
let lastElement = arr.pop();
arr.unshift(lastElement);

}
console.log(arr.join(' '));

}
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)