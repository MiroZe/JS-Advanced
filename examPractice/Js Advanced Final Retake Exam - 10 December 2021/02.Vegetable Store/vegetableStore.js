class VegetableStore {

    constructor(owner,location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        
    }

    loadingVegetables (vegetables) {

        let current = new Set()
        vegetables.forEach(line => {
            let [type,quantity,price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let isFound = this.availableProducts.find(el => el.type === type);
            if(!isFound) {
                this.availableProducts.push({
                    type, 
                    quantity,
                     price
                })
            } else {
                isFound.quantity += quantity
                if(price > isFound.price) {
                    isFound.price = price;
                }
            }
            current.add(type)

        });
        return `Successfully added ${Array.from(current).join(', ')}`
    }
    buyingVegetables (selectedProducts) {
        let currentProfit = 0
        selectedProducts.forEach( product => {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);
            let isFound = this.availableProducts.find(el => el.type == type);
            if(!isFound) {
                throw new Error(`${type} is not available in the store, your current bill is $${currentProfit.toFixed(2)}.`)
            }
            if(quantity > isFound.quantity) {
                throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${currentProfit.toFixed(2)}.`)
            }
            currentProfit += isFound.price * quantity;
            isFound.quantity -= quantity;
            
        })
        return `Great choice! You must pay the following amount $${currentProfit.toFixed(2)}.`
    }
    rottingVegetable (type, quantity) {
        let isFound = this.availableProducts.find(el => el.type == type);
        if(!isFound) {
            throw new Error(`${type} is not available in the store.`)
        }
        if(quantity > isFound.quantity) {
            isFound.quantity = 0
            return `The entire quantity of the ${type} has been removed.`
        } else {
            isFound.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision () {
        const output = [`Available vegetables:`];
        this.availableProducts.sort((a,b) => a.price - b.price)
        .forEach(product => output.push(`${product.type}-${product.quantity}-$${product.price}`))
        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return output.join('\n')
    }



}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


