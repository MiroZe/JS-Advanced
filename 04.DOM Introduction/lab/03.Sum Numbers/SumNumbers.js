function calc() {
    let firstNum = document.getElementById('num1').value;
    let secondNum = document.getElementById('num2').value;
    let sum = +firstNum + +secondNum;
    document.getElementById('sum').value = sum
}
