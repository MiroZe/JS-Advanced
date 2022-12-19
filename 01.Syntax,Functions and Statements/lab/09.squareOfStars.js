function squareOfStars (number) {

    let char  = '* ';
    let output = '';
    if ( typeof number !== 'number') {
        number = 5
    }
    for ( let i = 0; i < number; i++) {
    
    output += char.repeat(number);
    console.log(output);
    
    output = '';
    }
    
    } 
    squareOfStars(2)