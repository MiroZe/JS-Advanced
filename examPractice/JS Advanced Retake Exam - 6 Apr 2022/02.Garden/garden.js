class Garden {

    constructor(number) {
        this.spaceAvailable = number;
        this.plants = []; 
        this.storage = []; 
    }
    addPlant(plantName,spaceRequired) {
        if( this.spaceAvailable < spaceRequired) {
            throw new Error ('Not enough space in the garden.')
        }
        this.spaceAvailable -= spaceRequired
        let newPlant = {
            plantName,
            spaceRequired,
            ripe:false,
            quantity:0
        }
        this.plants.push(newPlant);
        return `The ${plantName} has been successfully planted in the garden.`

    }
    ripenPlant(plantName, quantity) {
        const isFound = this.plants.find(plant => plant.plantName == plantName)
        if(!isFound) {
            throw new Error(`There is no ${plantName} in the garden.`) 
        }
        if(isFound.ripe) {
            throw new Error (`The ${plantName} is already ripe.`)
        }
        if(quantity <=0) {
            throw new Error('The quantity cannot be zero or negative.')
        } else if (quantity == 1) {
            isFound.ripe = true;
            isFound.quantity += quantity;
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            isFound.ripe = true;
            isFound.quantity += quantity;
            return `${quantity} ${plantName}s have successfully ripened.`
        }
        
    }
    harvestPlant(plantName) {
        const isFound = this.plants.find(plant => plant.plantName == plantName)
        if(!isFound){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if(!isFound.ripe) {
            throw new Error (`The ${plantName} cannot be harvested before it is ripe.`)
        }
        let temp = {}
           temp[isFound.plantName] = isFound.quantity
           this.storage.push(temp);
           this.spaceAvailable += isFound.spaceRequired
        
        const index = this.plants.indexOf(isFound)
        this.plants.splice(index,1);
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport() {
       let output = '';
        output += `The garden has ${this.spaceAvailable} free space left.\n`
        
        let temp = []
        let sorted = this.plants.sort((a,b)=> a.plantName.localeCompare(b.plantName));
        sorted.forEach(el => temp.push(el.plantName))
        output += `Plants in the garden: ${temp.join(', ')}\n`
        if(this.storage.length === 0) {
            output += `Plants in storage: The storage is empty.`
        } else {
            let temp = [];
            this.storage.forEach(plant => {
                for (const key in plant ) {
                    temp.push(`${key} (${plant[key]})`)
                }
            })
            output += `Plants in storage: ${temp.join(', ')}`
        
        return output.trim();
            }    
    }

}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());






