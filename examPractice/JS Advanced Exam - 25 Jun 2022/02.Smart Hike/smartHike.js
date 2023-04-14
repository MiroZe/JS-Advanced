class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOFHikes = [];
        this.resources = 100;

    }
    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`

        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources <= 0) {
            throw new Error('You don\'t have enough resources to start the hike')

        }
        let difference = this.resources - (time * 10);
        if (difference < 0) {
            return 'You don\'t have enough resources to complete the hike'
        }
        let list = {
            peak,
            time,
            difficultyLevel
        }
        this.resources = difference
        this.listOFHikes.push(list)
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`


    }
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return 'Your resources are fully recharged. Time for hiking!'
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`

    }
    showRecord(criteria) {
        let output = '';
        switch (criteria) {
            case 'hard':
            case 'easy':
                

                if (this.listOFHikes.length === 0) {
                    return `${this.username} has not done any hiking yet`
                }
                let isFound = this.listOFHikes.filter(el => el.difficultyLevel == criteria)
                    .sort((a, b) => a.time - b.time);
                    

                if (isFound.length == 0) {
                    return `${this.username} has not done any ${criteria} hiking yet`
                }
                return `${this.username}'s best ${criteria} hike is ${isFound[0].peak} peak, for ${isFound[0].time} hours`


            case 'all':
                output += `All hiking records:\n`
                this.listOFHikes.forEach(el => output += `${this.username} hiked ${el.peak} for ${el.time} hours\n`)
                break;

        }
        return output.trim()
    }
}




const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));



