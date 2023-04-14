class OnlineShop {

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) {
        quantity = Number(quantity);
        spaceRequired = Number(spaceRequired);
        if(spaceRequired > this.warehouseSpace) {
            throw new Error ('Not enough space in the warehouse.')
        }
        let temp = {
            product,
            quantity
        }
        this.products.push(temp);
        this.warehouseSpace -= quantity;
        return `The ${product} has been successfully delivered in the warehouse.`
    }
    quantityCheck(product, minimalQuantity) {
        const isFound = this.products.find(el=> el.product === product)
        if(!isFound) {
            throw new Error (`There is no ${product} in the warehouse.`)
        }
        if(Number(minimalQuantity) <= 0) {
            throw new Error ('The quantity cannot be zero or negative.')
        }
        if(Number(minimalQuantity) <= isFound.quantity) {
            return `You have enough from product ${product}.`
        }
        let diff = minimalQuantity - isFound.quantity
        isFound.quantity = minimalQuantity;
        return `You added ${diff} more from the ${product} products.`
    }
    sellProduct(product) {
        const isFound = this.products.find(el=> el.product === product)
        if(!isFound) {
            throw new Error (`There is no ${product} in the warehouse.`)
        }
        isFound.quantity -= 1;
        let sold = {
            product,
            quantity :1
        }
        this.sales.push(sold)
        return `The ${product} has been successfully sold.`

    }
    revision() {
        if( this.sales.length == 0) {
            throw new Error ('There are no sales today!')
        }
        let output = [];
        output.push(`You sold ${this.sales.length} products today!`)
        output.push('Products in the warehouse:')
        this.products.forEach(product => {
            output.push(`${product.product}-${product.quantity} more left`)
        })

        return output.join('\n')
    }

}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


