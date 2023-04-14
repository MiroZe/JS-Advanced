window.addEventListener('load', solution);

function solution() {
  const inputs = Array.from(document.querySelectorAll('#form input'))
let [ fullNameInput,emailInput,phoneInput,addressInput,postCodeInput,submitBtn]= inputs
const previewUL = document.getElementById('infoPreview')
const blockDiv = document.getElementById('block')


submitBtn.addEventListener('click', preview);

function preview(e){
  if(fullNameInput.value == '' || emailInput.value == '') {
    return
  }

  let temp = {
    fname:fullNameInput.value,
    email:emailInput.value,
    phone:phoneInput.value,
    address:addressInput.value,
    code:postCodeInput.value
  }

  const li1 = document.createElement('li');
  li1.textContent = `Full Name: ${temp.fname}`
  const li2 = document.createElement('li');
  li2.textContent = `Email: ${temp.email}`
  const li3 = document.createElement('li');
  li3.textContent = `Phone Number: ${temp.phone}`
  const li4 = document.createElement('li');
  li4.textContent = `Address: ${temp.address}`
  const li5 = document.createElement('li');
  li5.textContent = `Postal Code: ${temp.code}`
  previewUL.appendChild(li1)
  previewUL.appendChild(li2)
  previewUL.appendChild(li3)
  previewUL.appendChild(li4)
  previewUL.appendChild(li5)
  submitBtn.disabled = true;
  let onlyInputs=inputs.slice(0,inputs.length -1)
  onlyInputs.forEach(el => el.value = '')
  const editBtn = document.getElementById('editBTN')
  const continueBtn = document.getElementById('continueBTN')
  editBtn.disabled = false
  continueBtn.disabled = false
  continueBtn.addEventListener('click',cont)
  
  editBtn.addEventListener('click',edit)
  function edit (e){
    editBtn.disabled = true;
    continueBtn.disabled = true;
    submitBtn.disabled = false;
    onlyInputs.forEach(el => el.value = temp[el.id])
    
    const child = Array.from(document.querySelectorAll('li'))
    .forEach(el => el.remove())
    
  }
  function cont(e) {
    const h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!'
    const children = Array.from(blockDiv.childNodes);
    children.forEach(el => el.remove())
    
    blockDiv.appendChild(h3)
  }
  
}

}
