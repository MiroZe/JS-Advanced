function addItem() {
    let ulElements = document.getElementById('items');
    let newLIElement = document.createElement('li');
    let inputText = document.getElementById('newItemText');
    
    newLIElement.textContent = inputText.value;
    ulElements.appendChild(newLIElement);
 
    
}
