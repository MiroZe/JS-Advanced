window.addEventListener("load", solve);

function solve() {
  const titleInput = document.getElementById('post-title');
  const categoryInput = document.getElementById('post-category');
  const contentInput = document.getElementById('post-content');
  const reviewPost = document.getElementById('review-list')
  const publishButton = document.getElementById('publish-btn').addEventListener('click', publish)

  function publish(e) {
    if(!titleInput.value,!categoryInput.value,!contentInput.value) {
      return
    }
    const li = document.createElement('li')
    li.className = 'rpost';
    const article= document.createElement('article');
    const h4 = document.createElement('h4');
    h4.textContent = titleInput.value;
    const pCategory = document.createElement('p');
    let categoryText = categoryInput.value
    pCategory.textContent = `Category: ${categoryText}`
    const pContent = document.createElement('p');
    let contentText = contentInput.value
    pContent.textContent = `Content: ${contentText}`
    article.appendChild(h4);
    article.appendChild(pCategory);
    article.appendChild(pContent);
    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';
    const approveBtn = document.createElement('button');
    approveBtn.className = 'action-btn approve';
    approveBtn.textContent = 'Approve';
    li.appendChild(article);
    li.appendChild(approveBtn);
    li.appendChild(editBtn);
    reviewPost.appendChild(li)
    titleInput.value = ''
    categoryInput.value = ''
    contentInput.value = ''

    editBtn.addEventListener('click', edit)
    function edit(e) {
      titleInput.value = h4.textContent;
      categoryInput.value = categoryText;
      contentInput.value = contentText;
      li.remove()
    }

     approveBtn.addEventListener('click',approve);
     function approve(){
      const review = document.getElementById('published-list')
      approveBtn.remove();
      editBtn.remove();
      review.appendChild(li);

      const clearBtn = document.getElementById('clear-btn')
      clearBtn.addEventListener('click',clear)
      function clear() {
       li.remove()
      }
     }

  }
}
