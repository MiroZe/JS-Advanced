function notify(message) {
  const targetDiv = document.getElementById('notification');
  targetDiv.textContent = message;
  targetDiv.style.display = 'block';
  targetDiv.addEventListener('click', ()=> {
    targetDiv.style.display = 'none'
  })


}