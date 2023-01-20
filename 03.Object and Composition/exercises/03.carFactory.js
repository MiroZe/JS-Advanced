function carFactory(carObject) {

    let newCar = {};
    let engines = {smallEngine: { power: 90, volume: 1800 },
    normalEngine: { power: 120, volume: 2400 },
    monsterEngine: { power: 200, volume: 3500 }
    }
    

   newCar.model = carObject.model;
   if(carObject.power <=90) {
    newCar.engine = engines.smallEngine
   } else if ( carObject.power <= 120) {
    newCar.engine = engines.normalEngine
   } else if (carObject.power <= 200){
    newCar.engine = engines.monsterEngine;
   }
   if ( carObject.carriage === 'hatchback') {
    newCar.carriage = {}
    newCar.carriage.type = carObject.carriage;
    newCar.carriage.color = carObject.color;
   } else if ( carObject.carriage === 'coupe') {
    newCar.carriage = {}
    newCar.carriage.type = carObject.carriage;
    newCar.carriage.color = carObject.color;
   }
   let wheelsize = carObject.wheelsize;
   newCar.wheels = [];
   if(wheelsize % 2 === 0) {
    for ( let i = 0; i <= 3; i++) {
        newCar.wheels.push(wheelsize - 1);
    }
   } else {
    for ( let i = 0; i <= 3; i++) {
        newCar.wheels.push(wheelsize);
   }
}
   return newCar;
}
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)