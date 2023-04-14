window.addEventListener("load", solve);

function solve() {
const inputs = Array.from(document.querySelectorAll('form input'))
const genreInput = document.getElementById('genre')
const textAreaInput = document.getElementById('story')
inputs.unshift(genreInput,textAreaInput)
const publishBtn = inputs.pop();
const publishUl = document.getElementById('preview-list')
const mainDiv= document.getElementById('main')
publishBtn.addEventListener('click',publish)

function publish(e){

const values = {};

inputs.forEach(input => values[input.id] = input.value)

let isEmpty = inputs.filter(input => input.value === '');
if(isEmpty.length > 0) {
  return
}
const li = document.createElement('li');
li.className = 'story-info';
const article = document.createElement('article');
const h4 = createEl('h4',`Name: ${values['first-name']} ${values['last-name']}`)
const p1 = createEl('p',`Age: ${values['age']}`)
const p2 = createEl('p',`Title: ${values['story-title']}`)
const p3 = createEl('p',`Genre: ${values['genre']}`)
const p4 = createEl('p', values['story'])
const saveStoryBtn = createEl('button','Save Story','save-btn')
const editStoryBtn = createEl('button','Edit Story','edit-btn')
const deleteStoryBtn = createEl('button','Delete Story','delete-btn')
article.appendChild(h4)
article.appendChild(p1)
article.appendChild(p2)
article.appendChild(p3)
article.appendChild(p4)
li.appendChild(article)
li.appendChild(saveStoryBtn)
li.appendChild(editStoryBtn)
li.appendChild(deleteStoryBtn)
publishUl.appendChild(li)
publishBtn.disabled = true;
inputs.forEach(input => input.value = '')
editStoryBtn.addEventListener('click', edit)
function edit(e) {
  e.preventDefault();
  publishBtn.disabled = false;
  saveStoryBtn.disabled = true;
  editStoryBtn.disabled = true;
  deleteStoryBtn.disabled = true;
  inputs.forEach(input => input.value = values[input.id])
  li.remove()

}
saveStoryBtn.addEventListener('click',save)
function save(e) {
  const h1 = createEl('h1','Your scary story is saved!')
  const allChilds = Array.from(mainDiv.childNodes);
  for(let child of allChilds) {
    child.remove()
  }
  mainDiv.appendChild(h1)
}
deleteStoryBtn.addEventListener('click', ()=>{
  li.remove();
  publishBtn.disabled = false
})


function createEl (type, value,className) {
  let el = document.createElement(type)
  el.textContent = value;
  if(className) {
    el.className = className
  }
  return el

}

}
}
