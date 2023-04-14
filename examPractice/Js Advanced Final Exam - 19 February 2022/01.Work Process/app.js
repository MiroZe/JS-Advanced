function solve() {
   const inputs = Array.from(document.querySelectorAll('form input'))
   const [firstN,lastN,mail,date,position,salary] = inputs;
   const tbody = document.getElementById('tbody')
   const hireBTn = document.getElementById('add-worker').addEventListener('click',hire);
   const budgetField = document.getElementById('sum');
   let budget = 0;
   let temp = [];
   



    function hire(e) {
        e.preventDefault();
        if(!firstN.value || !lastN.value || !mail.value ||!date.value || !position.value || !salary.value  ){
            return
        }
        
        const tr = document.createElement('tr');
        const td1 = createTd(firstN.value);
        const td2 = createTd(lastN.value);
        const td3 = createTd(mail.value);
        const td4 = createTd(date.value);
        const td5 = createTd(position.value);
        const td6 = createTd(salary.value);
        const tdBtn = document.createElement('td')
        const firedBtn = document.createElement('button');
        firedBtn.className = 'fired';
        firedBtn.textContent = 'Fired';
        const editdBtn = document.createElement('button');
        editdBtn.className = 'edit';
        editdBtn.textContent = 'Edit';
        tdBtn.appendChild(firedBtn);
        tdBtn.appendChild(editdBtn);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(tdBtn);
        tbody.appendChild(tr)
        console.log(temp);
        inputs.forEach(input => input.value = '')
        budget += Number(td6.textContent);
        budgetField.textContent = budget.toFixed(2);
        editdBtn.addEventListener('click',()=>{
            inputs.forEach((input,index) => {
                input.value = temp[index];
               
            });
           
            budget -= Number(td6.textContent)
            budgetField.textContent = budget.toFixed(2);
            tr.remove()
        })
        firedBtn.addEventListener('click',()=>{
            budget -= Number(td6.textContent)
            budgetField.textContent = budget.toFixed(2);
            tr.remove()
        })

        function createTd(value) {
            const td = document.createElement('td');
            td.textContent = value
            temp.push(td.textContent);
            return td

        }

    }

}
solve()