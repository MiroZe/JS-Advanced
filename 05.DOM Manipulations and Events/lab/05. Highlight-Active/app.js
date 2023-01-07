function focused() {
    let allInputElements =  document.querySelectorAll('input');
    
    for ( let input of allInputElements) {

        const focused = function (e) {
            e.target.parentNode.setAttribute('class', 'focused')
        }
        const blured = function(e) {
            e.target.parentNode.removeAttribute('class');
        }
        input.addEventListener('focus', focused);
        input.addEventListener('blur',blured)
    }
}