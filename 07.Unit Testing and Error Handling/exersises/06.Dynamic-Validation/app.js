function validate() {
    let emailInputText = document.getElementById('email')
    let text = emailInputText.value
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

    emailInputText.addEventListener('change',() => {
        let match = text.match(pattern);
        if(!match) {
           emailInputText.classList.add('error');
        }
        else {
            emailInputText.classList.remove('error');
        }
    }
    )
}