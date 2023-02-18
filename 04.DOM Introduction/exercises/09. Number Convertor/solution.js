function solve() {

    const input = document.getElementById('input');
    const selectMenu = document.getElementById('selectMenuTo');
    let convertButton = document.querySelector('button');
    let resultOutput = document.getElementById('result')


    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.innerText = 'Binary';
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.innerText = 'Hexadecimal';
    console.log(selectMenu);

    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadecimalOption)
    convertButton.addEventListener('click', onclick)


    function onclick(e) {
        number = Number(input.value)
        if (selectMenu.value === 'binary') {
            resultOutput.value = number.toString(2)

        } else if (selectMenu.value === 'hexadecimal') {
            resultOutput.value = number.toString(16).toUpperCase()
        }

    }

}