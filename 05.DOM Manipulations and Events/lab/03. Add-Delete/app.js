function addItem() {
    let ulElements = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let inputText = inputElement.value;
    inputElement.value = '';

    let newLiElements = document.createElement('li');
    newLiElements.textContent = inputText;

    let removeElement = document.createElement('a');
    removeElement.textContent = '[Delete]'
    removeElement.href = '#';
    removeElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove()
    })

    newLiElements.appendChild(removeElement);
    ulElements.appendChild(newLiElements);

}