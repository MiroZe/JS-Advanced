window.addEventListener("load", solve);

function solve() {
    const typeInput = document.getElementById('type-product');
    const textInput = document.getElementById('description');
    const clientInput = document.getElementById('client-name');
    const phoneInput = document.getElementById('client-phone');
    const sendBtn = document.querySelector('button[type="submit"]');
    const recievedOrders = document.getElementById('received-orders');
    inputs = [typeInput,textInput,clientInput,phoneInput]
    const completed = document.getElementById('completed-orders')
    const clearBtn = document.querySelector('.clear-btn')
    
    
    

    sendBtn.addEventListener('click', send) 
    function send(e) {
        e.preventDefault();
    
    if(textInput.value == '' || clientInput.value == '' || phoneInput.value == '' ) {
        return
    }
    let values = {
        'type-product' : typeInput.value,
        'description' :textInput.value,
        'client-name' : clientInput.value,
        'client-phone' : phoneInput.value
    }
    const div = document.createElement('div');
    div.className = 'container';
    const h2 = document.createElement('h2');
    h2.textContent = `Product type for repair: ${values['type-product']}`
    const h3 = document.createElement('h3');
    h3.textContent = `Client information: ${values['client-name']}, ${values['client-phone']}`
    const h4 = document.createElement('h4');
    h4.textContent = `Description of the problem: ${values['description']}`
    const startBtn = document.createElement('button');
    startBtn.className = 'start-btn';
    startBtn.textContent = 'Start repair'
    const finishBtn = document.createElement('button');
    finishBtn.className = 'finish-btn'
    finishBtn.textContent = 'Finish repair';
    finishBtn.disabled = 'true'
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(h4)
    div.appendChild(startBtn)
    div.appendChild(finishBtn)
    recievedOrders.appendChild(div)
    textInput.value = '';
    clientInput.value = '';
    phoneInput.value = '';

    

finishBtn.addEventListener('click',finish)
    startBtn.addEventListener('click',add)
    function add () {
        finishBtn.disabled = false;
        startBtn.disabled = true;
        
        
    }
    function finish() {
        completed.appendChild(div)
      
        startBtn.remove()
        finishBtn.remove()
        
    }
    clearBtn.addEventListener('click', ()=> {
      const childs = Array.from(completed.querySelectorAll('div'))
      childs.forEach(child => completed.removeChild(child))
    })

}


}



