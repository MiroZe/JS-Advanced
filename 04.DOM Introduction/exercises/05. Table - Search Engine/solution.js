function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let tableDatas = document.querySelectorAll('tbody tr');
   let inputData = document.getElementById('searchField');

   function onClick() {

      let inputText = inputData.value;

      for (let data of tableDatas) {
         inputData.value = '';
         data.classList.remove('select')
         if (data.textContent.includes(inputText) && inputText !== '') {
            data.classList.add('select')
         }

      }

   }
}