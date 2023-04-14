function solve(){
   const  inputs = Array.from(document.querySelectorAll('form input'));

   [authorInput,titleInput,categoryInput] = inputs
   const contentInput = document.getElementById('content');
   const createBtn = document.querySelector('button');
   const postSection = document.querySelector('main section');
   const archiveSection = document.querySelector('ol');
   

   createBtn.addEventListener('click',addContent)

   function addContent(e) {
      e.preventDefault();
      const article = document.createElement('article')
      const h1 = document.createElement('h1');
      h1.textContent = titleInput.value;
      
      const p1 = document.createElement('p');
      p1.textContent = 'Category: ';
      const strong1 = document.createElement('strong');
      strong1.textContent = categoryInput.value;
      p1.appendChild(strong1)
      const p2 = document.createElement('p');
      p2.textContent = 'Creator: ';
      const strong2 = document.createElement('strong');
      strong2.textContent = authorInput.value;
      p2.appendChild(strong2);
      const p3 = document.createElement('p');
      p3.textContent = contentInput.value;
      const div = document.createElement('div');
      div.className = 'buttons';
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn'
      deleteBtn.classList.add('delete')
      deleteBtn.textContent = 'Delete';
      const archiveteBtn = document.createElement('button')
      archiveteBtn.className = 'btn';
      archiveteBtn.classList.add('archive')
      archiveteBtn.textContent = 'Archive';
      div.appendChild(deleteBtn);
      div.appendChild(archiveteBtn);
      article.appendChild(h1)
      article.appendChild(p1)
      article.appendChild(p2)
      article.appendChild(p3)
      article.appendChild(div)
      postSection.appendChild(article);
      inputs.forEach(input => input.value = '')
      contentInput.value = ''
      
      
      archiveteBtn.addEventListener('click', archive);
      function archive (e) {
         
         let li = document.createElement('li');
         li.textContent = h1.textContent;
         archiveSection.appendChild(li)
         const allLiElements = Array.from(document.querySelectorAll('li'))
        
         allLiElements.sort((a,b)=> a.textContent.localeCompare(b.textContent))
         .forEach(li =>  
           
         archiveSection.appendChild(li)
      )
         article.remove()
      }
      deleteBtn.addEventListener('click',()=> {
         article.remove()
      })



   }


}