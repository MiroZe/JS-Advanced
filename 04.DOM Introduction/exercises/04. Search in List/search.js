function search() {
   let liTowns = document.querySelectorAll('ul li');
   
   let arr = Array.from(liTowns);
   let textField = document.getElementById('searchText').value ;
   let result = document.getElementById('result')
   let counter = 0;
   for ( let element of arr) {
     if(element.textContent.includes(textField)) {
      counter++;
      element.style.fontWeight =  'bold';
      element.style.textDecoration = 'underline';
     } else {
      element.style.fontWeight =  'normal';
      element.style.textDecoration = 'none';
     }
         

   

   }
   if( counter === 1) {
      result.textContent = `${counter} match found`
   } else {
      result.textContent = `${counter} matches found`
   }
   
}