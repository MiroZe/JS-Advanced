function wordUppercase(text) {

let pattern = /\w+/g;

let matches = text.match(pattern);
let upper = matches.map(word => word.toUpperCase())
console.log(upper.join(', '));

}
wordUppercase('Hi, how are you?')