function solve() {
   let productsElements = document.querySelectorAll('div .product');
   let buttonEelements = document.querySelectorAll('div .add-product');
   let priceElements = document.querySelectorAll('div .product-line-price');
   let textArea = document.querySelector('textarea');
   let productTitles = document.querySelectorAll('div .product-title');
   let checkOutButton = document.querySelector('.checkout');
   let totalSum = 0;
   let boughtProducts = [];
   let arreaOFAllButtons = Array.from(document.querySelectorAll('button'))


   let result = ''


   for (button of buttonEelements) {
      let addProduct = function (e) {
         
         let productName = e.target.parentNode.parentNode.querySelector('.product-title').textContent;
         let price = e.target.parentNode.parentNode.querySelector('.product-line-price').textContent;
         price = Number(price);
         result = `Added ${productName} for ${price.toFixed(2)} to the cart.\n`
         textArea.value += result;
         totalSum += price;
         if (!boughtProducts.includes(productName)) {
            boughtProducts.push(productName)
         }

      }

      button.addEventListener('click', addProduct)
      
   }
   let finalAction = function (e) {
      let finalText = `You bought ${boughtProducts.join(', ')} for ${totalSum.toFixed(2)}.`
      textArea.value += finalText;
      arreaOFAllButtons.forEach(button => button.disabled = true);


   }
   checkOutButton.addEventListener('click', finalAction);

}