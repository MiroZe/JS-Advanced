class SummerCamp {
    constructor(organizer,location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500}
        this.listOfParticipants = []
        
        

        }
        registerParticipant (name, condition, money) {
            if(!this.priceForTheCamp[condition]){
                throw new Error('Unsuccessful registration at the camp.')
            }
            let isExist = this.listOfParticipants.find(x => x.name === name)
            if(isExist){
                return`The ${name} is already registered at the camp.`
            }
            if(this.priceForTheCamp[condition] > money) {
               
                return `The money is not enough to pay the stay at the camp.`
            }
            let temp ={
                name,
                condition,
                power:100,
                wins:0
            }
            this.listOfParticipants.push(temp);
            return `The ${name} was successfully registered.`
            
        }
        unregisterParticipant (name){
            let isFound = this.listOfParticipants.find(x=> x.name === name)
            if(!isFound) {
                throw new Error (`The ${name} is not registered in the camp.`)
            }
            let index = this.listOfParticipants.indexOf(isFound)
            this.listOfParticipants.splice(index,1);
            return `The ${name} removed successfully.`
        }
        timeToPlay (typeOfGame, participant1, participant2) {
            let isFoundOne = this.listOfParticipants.find(x => x.name === participant1);
            let isFoundTwo = this.listOfParticipants.find(x => x.name === participant2);
            switch(typeOfGame) {
                case 'WaterBalloonFights' : 
                if(!isFoundOne || !isFoundTwo) {
                    throw new Error('Invalid entered name/s.')
                }
                if(isFoundOne.condition !== isFoundTwo.condition){
                    throw new Error('Choose players with equal condition.')
                }
                if(isFoundOne.power > isFoundTwo.power) {
                    isFoundOne.wins++;
                    return `The ${participant1} is winner in the game ${typeOfGame}.`
                } else if(isFoundOne.power < isFoundTwo.power) {
                    isFoundTwo.wins++;
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                } else {
                    return 'There is no winner.'
                }
                
                
                case 'Battleship': 
                if(!isFoundOne) {
                    throw new Error('Invalid entered name/s.')
                }
                isFoundOne.power += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`
                

            }
        }
        toString () {
            let output = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`
            let sorted = this.listOfParticipants.sort((a,b) => b.wins - a.wins)
            .forEach(x=> output+= `${x.name} - ${x.condition} - ${x.power} - ${x.wins}\n`)
            return output.trim();
        }
}




