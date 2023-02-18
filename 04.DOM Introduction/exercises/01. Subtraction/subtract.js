function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let subtract = Number(firstNumber) - Number(secondNumber);
    let resultElement = document.getElementById('result');
    resultElement.textContent =  subtract;
    console.log(resultElement.textContent);
    let enabledFirstlement = document.getElementById('firstNumber').disabled = false;
    let enabledSecondElement = document.getElementById('secondNumber').disabled = false;
    
    
}