function editElement(reference,match,replacer) {
    
    let content = reference.textContent;
    while(content.includes(match)) {
        content = content.replace(match, replacer)
    } 
    reference.textContent = content;
    
}