function evenPosition(input) {
    let output = ''

    for ( let index = 0; index < input.length; index++) {

        if( index % 2 === 0) {
            output += input[index] + ' '
        }
    }
console.log(output);

}
evenPosition(['5', '10'])