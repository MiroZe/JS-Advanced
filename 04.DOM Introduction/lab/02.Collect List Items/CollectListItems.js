function extractText() {
    let extractedLiElements = document.getElementsByTagName('li');
   
    
    let textArea = document.querySelector('#result')
    
    for (liElement of extractedLiElements) {
        textArea.value += liElement.textContent + '\n'
    }

}