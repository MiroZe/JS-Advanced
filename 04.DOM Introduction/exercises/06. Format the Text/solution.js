function solve() {
  let inputText = document.getElementById('input')
  let text = inputText.value;
  let arrayOfText = text.split('.').filter(s => s !== '');
  let newParagraphElement = document.getElementById('output')
  
  let result = '';
  while ( arrayOfText.length > 0) {
    result = arrayOfText.splice(0,3).join('.') + '.' 
    const p = document.createElement('p');
    p.textContent = result;
    newParagraphElement.appendChild(p)
  }
  
}