
function autoEnginnering(input) {

    let result = {}

    for( const line of input ) {
        let [brand,model,quantity] = line.split(' | ');
         quantity = Number(quantity)
        if(!result[brand]) {
            result[brand] = []
            result[brand].push({[model]:quantity})
        }else {
            let check = result[brand].find(el =>el.hasOwnProperty(model))
            
            if(!check) {
            result[brand].push({[model]:quantity})
            } else {
                check[model] +=quantity
            }
               

        } 

    }    
let output = []
for(let key in result) {
    output.push(key)
    result[key].forEach(element => { for (let key in element) {
        output.push(`###${key} -> ${element[key]}`)
    }
        
    });
}
console.log(output.join('\n'));

}
autoEnginnering(

['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])
