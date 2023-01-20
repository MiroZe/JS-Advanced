function caloriesObject(input) {

    let products = {};

    for ( let i = 0; i < input.length; i+=2) {
        let currentProduct = input[i];
        let currentCalories = input[i+1];
        products[currentProduct] = Number(currentCalories);

    }
console.log(products);
}
caloriesObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])