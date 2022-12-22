function equalNumbers(input) {
    let index = 0;

    let counter = 0;
    for ( let row = 0; row < input.length; row++) {
        for ( let r = 0; r < input[row].length; r++) {
            if( input[row][r] === input[row][r+1]){
                counter ++;
            }

        }
        
        if( row < input.length -1 ) {
            for ( let m = 0; m < input[row].length; m++) {
                if ( input[row][m] === input[row + 1][m]) {
                    counter++;
                }
               }
        }
       
        
    }
return counter;
}
equalNumbers([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)
