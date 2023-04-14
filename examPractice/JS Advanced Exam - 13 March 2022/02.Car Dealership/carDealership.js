class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0 ;

    }
    addCar(model,horsePower,price,mileage) {
        if(model == '' || typeof model !== 'string' || horsePower <0 || price < 0 || mileage < 0 
        || typeof horsePower !== "number" || typeof price !== "number" || typeof mileage !== 'number') {
            throw new Error ('Invalid input!')
        }
        
        const temp = {
            model,
            horsePower,
            mileage,
            price
        }
        this.availableCars.push(temp);
        return `New car added: ${model} - ${horsePower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar (model, desiredMileage) {
        const isFound = this.availableCars.find(el => el.model === model)
        if(!isFound){
            throw new Error(`${model} was not found!`)
        }
        let diffInKm = (isFound.mileage - Number(desiredMileage)) 
        
        
        if(diffInKm <= 40000 && diffInKm > 0) {
            isFound.price *= 0.95
        } else if(diffInKm> 40000) {
            isFound.price *= 0.90
        }
        this.soldCars.push( {
            model : isFound.model,
            horsePower : isFound.horsePower,
            soldPrice : isFound.price
        })
        let index = this.availableCars.indexOf(isFound);
        this.availableCars.splice(index,1);
        this.totalIncome += isFound.price;
        return `${model} was sold for ${isFound.price.toFixed(2)}$`
    }
    currentCar () {
        if(this.availableCars.length == 0) {
            return 'There are no available cars'
        }
        let temp = [];
        temp.push(`-Available cars:`)
        this.availableCars.forEach( car => temp.push(`---${car.model} - ${car.horsePower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`))
        return temp.join('\n')
    }
    salesReport (criteria){
        if(criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error ('Invalid criteria!');
        }
        if(criteria == 'horsepower') {
            this.soldCars.sort((a,b)=> b.horsePower - a.horsePower);
        } else {
            this.soldCars.sort((a,b)=> a.model.localeCompare(b.model));
        }

        let output = [];
        output.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`)
        output.push(`-${this.soldCars.length} cars sold:`)
        this.soldCars.forEach(car => output.push(`---${car.model} - ${car.horsePower} HP - ${car.soldPrice.toFixed(2)}$`))

        return output.join('\n')
    }   

}