window.addEventListener("load", solve);

function solve() {
  const brandNameInput = document.getElementById('make');
  const modelInput = document.getElementById('model');
  const yearInput = document.getElementById('year');
  const fuelInput = document.getElementById('fuel');
  const priceInput = document.getElementById('original-cost');
  const sellingPriceInput = document.getElementById('selling-price');
  const publisBtn = document.getElementById('publish').addEventListener('click',publish);
  const tbody = document.getElementById('table-body')
  const soldCars = document.getElementById('cars-list');
  const profit = document.getElementById('profit')
  let totalProfit = 0;
  
  function publish(e) {
    let temp = {};
    e.preventDefault();
    
    let array = new Array(brandNameInput,modelInput,yearInput,fuelInput,priceInput,sellingPriceInput)
    
    let filtered = array.filter(el => el.value == '');
    
    if(filtered.length > 0 || priceInput.value > sellingPriceInput.value ) {
      return;
    }
    const tr = createEl('tr');
    tr.className = 'row'
    const td1 = createEl('td',brandNameInput.value);
    const td2 = createEl('td',modelInput.value);
    const td3 = createEl('td',yearInput.value);
    const td4 = createEl('td',fuelInput.value);
    const td5 = createEl('td',priceInput.value);
    const td6 = createEl('td',sellingPriceInput.value);
    const td7 = document.createElement('td');
    const editBtn = createEl('button','Edit','action-btn','edit')
    const sellBtn = createEl('button','Sell','action-btn','sell')
    td7.appendChild(editBtn);
    td7.appendChild(sellBtn);
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    tbody.appendChild(tr)
    
    array.forEach( el => {
      temp[el.id] = el.value
      el.value = ''});
      
      
    

    editBtn.addEventListener('click',post)
    function post(e) {
      console.log(temp);
      array.forEach( el => el.value = temp[el.id])
      console.log(temp);
      
     
      tr.remove()

    }
    sellBtn.addEventListener('click',sell);
    function sell(e) {
      const li = document.createElement('li');
      li.classList = 'each-list';
      const span1 = createEl('span',`${temp.make} ${temp.model}`)
      const span2 = createEl('span',`${temp.year}`);
      let diff = Number(temp['selling-price'])- Number(temp['original-cost'])
      const span3 = createEl('span', `${diff}`);
      temp = []
      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);
      soldCars.appendChild(li)
      totalProfit += diff
      profit.textContent = totalProfit.toFixed(2);
      tr.remove()

    }
     


  }

  function createEl(typeEl,value,className,className2) {
    const el = document.createElement(typeEl);
    el.textContent = value;
    if(className) {
      el.classList.add(className)
      el.classList.add(className2)
    }
    
    return el;
  }



}
