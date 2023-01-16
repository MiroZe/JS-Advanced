function solution() {

    let returned = {};
    let isMade = false;
    let ingridients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let reciepe = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }
    let actions = {
        restock: (ingridient, value) => {
            ingridients[ingridient] += value
            return 'Success'
        },
        prepare: (product, quantity) => {
            let message = '';
            for (key in reciepe[product]) {

                let consumed = ingridients[key] - (reciepe[product][key] * quantity)
                if (consumed < 0) {
                    message = `Error: not enough ${key} in stock`
                    isMade = false;
                    break;

                } else {
                    returned[key] = ingridients[key]
                    ingridients[key] -= reciepe[product][key] * quantity;
                    isMade = true;
                }

            }
            if (isMade === true) {
                message = 'Success';
            } else {
                for (key in returned) {
                    ingridients[key] = returned[key]
                }
            }
            return message;
        },
        report: () => {
            let output = [];
            for (key in ingridients) {
                let line = `${key}=${ingridients[key]}`
                output.push(line);
            }
            return (output.join(' '));

        }
    }

    function manager(...input) {

        for (const line of input) {
            let [command, ingridient, value] = line.split(' ');
            value = Number(value)
            return actions[command](ingridient, value)

        }

    }
    return manager;

}
let manager = solution();
// console.log(manager("prepare turkey 1")); // Success 
// console.log(manager("restock protein 10")); // Error: not enough carbohydrate in stock 
// console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock 
// console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock 
// console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock 
// console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock 
// console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock 
// console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock 
// console.log(manager("prepare turkey 1")); // Error: not enough carbohydrate in stock 
// console.log(manager("report")); // Error: not enough carbohydrate in stock 

console.log(manager("restock flavour 50 ")); // Success 

console.log(manager("prepare lemonade 4 ")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock 
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock 
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock
