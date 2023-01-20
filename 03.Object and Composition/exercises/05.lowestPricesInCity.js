function lowestPrice(input) {
    let products = {}
    for (const element of input) {
        let [town, product, price] = element.split(' | ');
        price = +price;
        if (!products[product]) {
            products[product] = { price, town };
        } else {
            if (products[product].price > price) {
                products[product].price = price;
                products[product].town = town
            }
        }

    }
    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }


}

lowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
)
// Audi -> 1000 (Mexico City)
// BMW -> 99999 (Mexico City)
// Mitsubishi -> 1000 (New York City)
// Mercedes -> 1000 (Washington City)
// NoOffenseToCarLovers -> 0 (Sofia City)