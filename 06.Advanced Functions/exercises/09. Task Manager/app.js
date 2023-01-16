function solve() {
    let inputs = {
        name : document.querySelector('#task'),
        description:document.querySelector('#description'),
        dateInputField :document.querySelector('#date')
    }
    

    const[addTaskSelection,openSelection,progressSelection,completeSelection] = Array.from(document.querySelectorAll('section'))
    .map(e => e.children[1])
    function createElement(type,description,className) {
        const element = document.createElement(type);
        element.textContent = description;
        if(className){
            element.className = className
        }
        return element;
    } 
    let addButton = document.querySelector('#add')
    addButton.addEventListener('click',addTask);

    function addTask(e) {
        e.preventDefault();
        if ( inputs.name.value != '' && inputs.description.value != '' && inputs.dateInputField.value != '') {
        const article = document.createElement('article');
        article.appendChild(createElement('h3',inputs.name.value))
        article.appendChild(createElement('p',`Description: ${inputs.description.value}`))
        article.appendChild(createElement('p',`Due Date: ${inputs.dateInputField.value}`))
        const div = document.createElement('div');
        div.classList = "flex";
        const startButton = createElement('button','Start',"green");
        const deleteButton = createElement('button','Delete',"red");
        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(div);
        openSelection.appendChild(article);
        Object.values(inputs).forEach(e => e.value = '');

        startButton.addEventListener('click', moveText);
        deleteButton.addEventListener('click',deleteArticle);
        let finishButton;

        function moveText(e) {
            startButton.remove();
            finishButton = createElement('button','Finish',"orange")
            div.appendChild(finishButton)
            progressSelection.appendChild(article);
            finishButton.addEventListener('click',finish)

        }
        function deleteArticle (e) {
            article.remove();
            
        }
        function finish (e) {
            div.remove()
            completeSelection.appendChild(article)
        }
    }
    }
}