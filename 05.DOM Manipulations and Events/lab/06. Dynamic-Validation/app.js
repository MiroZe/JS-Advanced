function validate() {
    let emailInputElement = document.getElementById('email');
    
    

    const validation = function (e) {
        let inputText = emailInputElement.value;
        
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+/g
        let matches = inputText.match(pattern);
        
        if(matches) {
            e.target.removeAttribute('class');
            return;
        }
        e.target.className = 'error';
    }
       
    emailInputElement.addEventListener('change', validation)
}