function coockingByNumbers(number, operationOne, operationTwo, operationThree, operationFour, operationFive) {

    number = +number;
    let arr = [];
    arr.push(operationOne, operationTwo, operationThree, operationFour, operationFive);
    for (operator of arr) {
        
        switch (operator) {
            case 'chop': number = number / 2;
                console.log(number);
                break;
            case 'dice': number = Math.sqrt(number) ;
                console.log(number);
                break;
            case 'spice': number++;
                console.log(number);
                break;
            case 'bake': number *= 3;
                console.log(number);
                break;
            case 'fillet': number -= number*0.2
                console.log(number);
                break;

        }
    }



}
coockingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')