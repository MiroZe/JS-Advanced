function solve() {
    const inputs = Array.from(document.querySelectorAll('input'))
    const onScreenBtn = document.querySelector('#container button')
    const fields = {
        movieList: document.querySelector('#movies ul'),
        movieArchieve: document.querySelector('#archive ul')
    }
    
    onScreenBtn.addEventListener('click',addMovies)
    const clearBtn = document.querySelector('#archive button')
    clearBtn.addEventListener('click',()=> {
        fields.movieArchieve.innerHTML = ''
    })

    function addMovies(e) {
        e.preventDefault()
        const values = {}
        let isValid = true
        inputs.forEach(input => {
            values[input.placeholder]= input.value
        if(input.value == ''){
            isValid= false
        }
    })
    
    if(!isValid || isNaN(values['Ticket Price'])) {
        return

    }

     const li = createEl('li','',fields.movieList)   
     const span = createEl('span',`${values['Name']}`,li)
     const strong = createEl('strong',`Hall: ${values['Hall']}`,li)
     const div = createEl('div','',li)
     const strongPrice = createEl('strong',`${values['Ticket Price']}`,div)
     const input = createEl('input','',div,{placeholder: "Ticket Sold"})
     const archieveButton = createEl('button','Archive',div)
    inputs.forEach(el => el.value = '')
    archieveButton.addEventListener('click', addToArchieve)
    function addToArchieve(e) {
        const ticketSold = e.target.parentElement.querySelector('input[placeholder="Ticket Sold"]')
        
        if(isNaN(ticketSold.value) || ticketSold.value == '') {
            return
        }
        totalAmount = ticketSold.value * values['Ticket Price']
        fields.movieArchieve.appendChild(li)
        strong.textContent = `Total amount: ${totalAmount.toFixed(2)}`      
        div.remove()
        const deleteBtn = createEl('button','Delete',li)
        deleteBtn.addEventListener('click',()=> {
            li.remove()
        })
        
        

    }

    }
    function createEl (type,content,parent,attribute){
        const el = document.createElement(type)
        if(content) {
            el.textContent = content
        }
        if(attribute){
            Object.assign(el,attribute)
        }
        if(parent) {
            parent.appendChild(el)
        }
        return el
    }
}