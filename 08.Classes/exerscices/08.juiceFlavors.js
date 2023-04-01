function jiiceFlavors(input) {

    let juices = {};
    let bottles = {}
    
    
    for( let element of input) {
        let [name, quantity] = element.split(' => ')
        quantity = Number(quantity)
        if(!juices[name]) {
            juices[name] = 0
        }
        juices[name] += Number(quantity);
        
        if(juices[name] >= 1000) {
            if(bottles.hasOwnProperty(name)) {
                bottles[name] += Math.floor(juices[name] / 1000)
                juices[name] -= bottles[name] * 1000
            } else {
                bottles[name] =   Math.floor(juices[name] / 1000)
                juices[name] -= bottles[name] * 1000
            }
            
        }
        
    }
    

Object.entries(bottles).forEach(el=> console.log(`${el[0]} => ${el[1]}`))

}
jiiceFlavors(
    ['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']

    )
