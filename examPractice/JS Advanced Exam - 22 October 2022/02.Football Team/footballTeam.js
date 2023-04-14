class footballTeam {
    constructor(clubName,country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = []; 

    }
    newAdditions(footballPlayers){
        let playerList = new Set()
        footballPlayers.forEach(line => {
            let[name,age,playerValue] = line.split('/');
            playerValue = Number(playerValue)
            let isFound = this.invitedPlayers.find(player => player.name === name)
            if(!isFound) {
              let temp = {
                    name,
                    age,
                    playerValue
                }
                this.invitedPlayers.push(temp)
            } else {
                if(isFound.playerValue < playerValue) {
                    isFound.playerValue = price
                }
            }
            playerList.add(name)
        })
        
        let arr = Array.from(playerList)
        return `You successfully invite ${arr.join(', ')}.`
    }
    signContract(selectedPlayer){
        let[name,offer] = selectedPlayer.split('/')
        offer = Number(offer)
        let isFound = this.invitedPlayers.find(player => player.name === name)
        if(!isFound) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(offer < isFound.playerValue  ) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${isFound.playerValue - offer} million more are needed to sign the contract!`)
        }
        isFound.playerValue = 'Bought'
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`


    }
    ageLimit(name, age) {
        let isFound = this.invitedPlayers.find(player => player.name === name)
        if(!isFound) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(isFound.age < age) {
            let diff = age - isFound.age
            if( diff < 5) {
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
            } else if( diff > 5) {

                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            } 

            
        }
        return `${name} is above age limit!`
    }
    transferWindowResult() {
        let output = ['Players list:'];
        this.invitedPlayers.sort((a,b)=> a.name.localeCompare(b.name))
        .forEach(player => output.push(`Player ${player.name}-${player.playerValue}`))
        return output.join('\n')
    }

}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Aau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());




