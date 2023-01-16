function argumentInfo(...input) {

    let result = {};
    for ( const element of input) {
        let type = typeof element;
        
       console.log(`${type}: ${element}`);
       if(!result[type]) {
        result[type] = 0;
       }
       result[type]++;
    }
    let sorted = Object.entries(result).sort((a,b) => b[1] - a[1])
    for( count of sorted) {
        
        console.log(`${count[0]} = ${count[1]}`);
    }

}
argumentInfo('cat','dog',42,55, function () { console.log('Hello world!')})