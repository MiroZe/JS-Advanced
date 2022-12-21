function greatestDivisor(x,y) {

    let greatestDivisor =0;

    for ( let i = 1; i <= x && i <= y; i++) {

        if( x % i === 0 && y % i === 0) {
            greatestDivisor = i;
        }
    }
    console.log(greatestDivisor);
}
greatestDivisor(15, 5)