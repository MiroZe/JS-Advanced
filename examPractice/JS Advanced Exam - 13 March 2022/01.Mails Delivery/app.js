function solve() {
const inputs = Array.from(document.querySelectorAll(' form input, textarea'))
const[addBtn,resetBtn] = Array.from(document.querySelectorAll('.action button'))
const ulMailList = document.querySelector('#list')
const deleteMailLIst = document.querySelector('.delete-list')
resetBtn.addEventListener('click',reset)
function reset(e){
 e.preventDefault()
inputs.forEach(input =>input.value = '')
    
}

addBtn.addEventListener('click', add)
function add(event){
    event.preventDefault();
    let values = {}
    let isCorrect = true
    inputs.forEach(input => {
        values[input.id]= input.value
        if(input.value === '') {
            isCorrect = false
        }
    })
    if(!isCorrect) {
        return
    }
    const li = createEl('li')
    const h41 = createEl('h4',`Title: ${values['title']}`) 
    const h42 = createEl('h4',`Recipient Name: ${values['recipientName']}`) 
    const span = createEl('span',`${values['message']}`) 
    const div = createEl('div')
    div.id = 'list-action'
    const sendBtn = createEl('button','Send')
    sendBtn.type = 'submit'
    sendBtn.id = 'send'
    const deleteBtn = createEl('button','Delete')
    deleteBtn.type = 'submit'
    deleteBtn.id = 'delete'
    div.appendChild(sendBtn)
    div.appendChild(deleteBtn)
    li.appendChild(h41)
    li.appendChild(h42)
    li.appendChild(span)
    li.appendChild(div)
    ulMailList.appendChild(li)
    inputs.forEach( input => input.value = '')

    

    sendBtn.addEventListener('click', sendMail)

    function sendMail(e) {
        const ulSentMails = document.querySelector('.sent-list')
        const li2 = createEl('li')
        const span2 = createEl('span',`To: ${values['recipientName']}`)
        const span3 = createEl('span',`Title: ${values['title']}`)
        const div2 = createEl('div')
        div2.className = 'btn'
        const delete2Btn = createEl('button','Delete')
        delete2Btn.type = 'submit'
        delete2Btn.className = 'delete'
        li2.appendChild(span2)
        li2.appendChild(span3)
        div2.appendChild(delete2Btn)
        li2.appendChild(div2)
        ulSentMails.appendChild(li2)
        li.remove()
        delete2Btn.addEventListener('click',()=> {
            deleteMailLIst.appendChild(li2)
            delete2Btn.remove()
        })
        
    }
    
    deleteBtn.addEventListener('click',()=> {
        const li2 = createEl('li')
        const span2 = createEl('span',`To: ${values['recipientName']}`)
        const span3 = createEl('span',`Title: ${values['title']}`)
        li2.appendChild(span2)
        li2.appendChild(span3)
        deleteMailLIst.appendChild(li2)
        li.remove()
        deleteBtn.remove()
        sendBtn.remove()
    })
   

    function createEl (type,value) {
        const el = document.createElement(type)
        if(value){
            el.textContent = value;
        
        }
     
        return el

    }
  

}
}

solve()