function fruits(fruit, weigthInGrams, pricePerKg) {

    let sum = (weigthInGrams / 1000) * pricePerKg;

    console.log(`I need $${sum.toFixed(2)} to buy ${(weigthInGrams / 1000).toFixed(2)} kilograms ${fruit}.`);



}
fruits('orange', 2500, 1.80)