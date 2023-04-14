window.addEventListener('load', solve);

function solve() {

    const[genreInput,songInput,authorInput,dateInput] = document.querySelectorAll('input');
    const addButton = document.getElementById('add-btn');
    const songCollectSection = document.querySelector('.all-hits-container')
    addButton.addEventListener('click',add);
    const likeSection = document.querySelector('.likes p');
    const savedSongsSection = document.querySelector('.saved-container')
    let counter = 0;

    function add(e) {
        e.preventDefault();
        if(!genreInput.value || !songInput.value || !authorInput.value || !dateInput.value) {
            return
        }
        const div = document.createElement('div');
        div.className = 'hits-info'
        const img = document.createElement('img');
        img.src = './static/img/img.png'
        const h21 = document.createElement('h2');
        h21.textContent = `Genre: ${genreInput.value}`
        const h22 = document.createElement('h2');
        h22.textContent = `Name: ${songInput.value}`;
        const h23 = document.createElement('h2');
        h23.textContent = `Author: ${authorInput.value}`
        const h3 = document.createElement('h3');
        h3.textContent = `Date: ${dateInput.value}`
        const saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save song';
        const likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.textContent = 'Like song';
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        div.appendChild(img)
        div.appendChild(h21)
        div.appendChild(h22)
        div.appendChild(h23)
        div.appendChild(h3)
        div.appendChild(saveBtn)
        div.appendChild(likeBtn)
        div.appendChild(deleteBtn)
        songCollectSection.appendChild(div);
        genreInput.value = '';
        songInput.value = ''
        authorInput.value = '';
        dateInput.value = ''


        likeBtn.addEventListener('click', ()=>{
            likeSection.textContent = `Total Likes: ${++counter}`;
            likeBtn.disabled = true;
        })
        saveBtn.addEventListener('click',()=>{
            saveBtn.remove();
            likeBtn.remove()
            savedSongsSection.appendChild(div)
        })
        deleteBtn.addEventListener('click',()=>{
            div.remove()
        })

    }

}