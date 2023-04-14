function solution() {

    const input = document.querySelector('input')
    const addButton = document.querySelector('button')
    const sectionList = document.querySelector('.container section:nth-child(2) ul');
    const sectionSendGifts = document.querySelector('.container section:nth-child(3) ul');
    const sectionDiscardedGifts = document.querySelector('.container section:nth-child(4) ul');
    
    addButton.addEventListener('click', addList);
    function addList() {

        let text = input.value;
        let newLi = document.createElement('li');
        newLi.setAttribute('class','gift')
        newLi.textContent = text
        let buttonSend = document.createElement('button');
        let buttonDiscard = document.createElement('button');
        buttonDiscard.id = 'discardButton'
        buttonDiscard.textContent = 'Discard'
        buttonSend.id = 'sendButton';
        buttonSend.textContent = 'Send'

        newLi.appendChild(buttonSend);
        newLi.appendChild(buttonDiscard);

        sectionList.appendChild(newLi)
        input.value = '';

        const allLiElements = Array.from(sectionList.querySelectorAll('li'))
        allLiElements.sort((a, b) => a.innerText.localeCompare(b.innerText))
        .forEach(li => sectionList.appendChild(li))

        buttonSend.addEventListener('click', (e) => {
            
            const sendGifts = e.target.parentElement
            sendGifts.lastElementChild.remove()
            sendGifts.lastElementChild.remove()

            sectionSendGifts.appendChild(sendGifts)

        })
        buttonDiscard.addEventListener('click', (e) => {
            
            const discardedGifts = e.target.parentElement;
            discardedGifts.lastElementChild.remove();
            discardedGifts.lastElementChild.remove();
            sectionDiscardedGifts.appendChild(discardedGifts);
        })
    }

}

// function solution() {
 
//     let input = document.querySelector('input');
//     let addButton = document.querySelector('button');
//     let gifts = document.querySelector('.container > section:nth-of-type(2) ul');
//     let sentGifts = document.querySelector('.container > section:nth-of-type(3) ul');
//     let discardedGifts = document.querySelector('.container > section:nth-of-type(4) ul');
 
//     addButton.addEventListener('click', addGift);
 
//     function addGift() {
 
//         if (input.value.trim()) {
 
//             let sendButton = document.createElement('button');
//             sendButton.setAttribute('id', 'sendButton');
//             sendButton.textContent = 'Send';
 
//             let discardButton = document.createElement('button');
//             discardButton.setAttribute('id', 'discardButton');
//             discardButton.textContent = 'Discard';
 
//             let item = document.createElement('li');
//             item.setAttribute('class', 'gift');
//             item.textContent = input.value;
//             item.appendChild(sendButton);
//             item.appendChild(discardButton);
 
//             gifts.appendChild(item);
 
//             // sort gifts alphabetically
//             Array.from(gifts.querySelectorAll('li'))
//                 .sort((a, b) => a.textContent.localeCompare(b.textContent))
//                 .forEach(item => gifts.appendChild(item));
 
//             input.value = null;
 
//             [sendButton, discardButton].forEach(btn => btn.addEventListener('click', manageGifts));
//         }
//     }
 
//     function manageGifts(btn) {
 
//         let item = btn.target.parentNode;
//         item.lastElementChild.remove();
//         item.lastElementChild.remove();
 
//         if (btn.target.textContent === 'Send') {
//             sentGifts.appendChild(item);
//         } else {
//             discardedGifts.appendChild(item);
//         }
//     }
// }