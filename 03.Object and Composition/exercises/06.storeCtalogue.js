function storeCatalogue(input) {

    let catalogue = {};
    for (const element of input) {
        let[product, price] = element.split(' : ');
        price = +price;
        catalogue[product] = price
    }
    let arr = []
let sortedCtalogue = Object.entries(catalogue).sort((a,b) => a[0].localeCompare(b[0]))
sortedCtalogue.forEach(el => {
    
let firstLetter = el[0][0] 
if(!arr.includes(firstLetter)) {
    arr.push(firstLetter);
    console.log(firstLetter);
    console.log(`  ${el[0]}: ${el[1]}`);
}else {
    console.log(`  ${el[0]}: ${el[1]}`);
}

}
)
}
storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)