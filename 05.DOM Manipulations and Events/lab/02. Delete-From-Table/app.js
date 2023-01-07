function deleteByEmail() {
    let mailInputlment = document.querySelector('input[name = "email"]')
    let allmailsElements = document.querySelectorAll('tr td:nth-of-type(2)')
    let inputText = mailInputlment.value;
    
    let resultField = document.getElementById('result')
    for ( mail of allmailsElements) {
        if(mail.textContent === mailInputlment.value) {
            mail.parentNode.remove(mailInputlment);
            resultField.textContent = 'Deleted.'
            mailInputlment.value = ''
        } else  {
            resultField.textContent = 'Not found..'
        }
}
}