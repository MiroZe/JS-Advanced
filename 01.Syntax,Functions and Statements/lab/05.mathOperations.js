'use strict'
function mathOpeartions(operandOne,operandTwo,operator) {
    

    let sum = (a,b) => a+b;
    let subtract = (a,b) => a-b;
    let devine = (a,b) => a / b;
    let multiply = (a,b) => a * b;
    let modulDevine = (a,b) => a % b;
    let pow = (a,b) => a**b;

    switch(operator) {
        case '+' : console.log(sum(operandOne,operandTwo));break;
        case '-' : console.log(subtract(operandOne,operandTwo));break;
        case '/' : console.log(devine(operandOne,operandTwo));break;
        case '*' : console.log(multiply(operandOne,operandTwo));break;
        case '%' : console.log(modulDevine(operandOne,operandTwo));break;
        case '**' : console.log(pow(operandOne,operandTwo));break;

    };

}
mathOpeartions(3, 5.5, '**')