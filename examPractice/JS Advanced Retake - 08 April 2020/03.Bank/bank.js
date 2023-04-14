class Bank {
    
    constructor(bankName) {
        this._bankName = bankName
        this.allCustomers = [];
        this.transaction = [];
    }
    newCustomer(customer) {
        if (this.allCustomers.length == 0) {
            this.allCustomers.push(customer)
        } else {
            this.allCustomers.forEach(client => {
                if (client.personalId == customer.personalId) {
                    throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
                } else {
                    this.allCustomers.push(customer)
                }
            })

        }
        return customer
    }
    depositMoney(personalId, amount) {
        let isFound = this.allCustomers.find(client => {return client.personalId == personalId})
            if(!isFound){
                throw new Error("We have no customer with this ID!");             
            } else {
                if(typeof isFound['totalMoney'] !== "number")
                isFound['totalMoney'] = amount;
                else {
                    isFound['totalMoney'] += amount;
                }
            }
            
            this.transaction.push(`${isFound.firstName} ${isFound.lastName} made deposit of ${amount}$!`)
            return `${isFound['totalMoney']}$`
        
    }
    withdrawMoney (personalId, amount) {
        const isFound = this.allCustomers.find(client => client.personalId === personalId)
        if(!isFound) {
            throw new Error ('We have no customer with this ID!')
        }
        if((isFound.totalMoney - amount) < 0) {
            throw new Error (`${isFound.firstName} ${isFound.lastName} does not have enough money to withdraw that amount!`)
        } else {
            isFound.totalMoney -= amount;
            this.transaction.push(`${isFound.firstName} ${isFound.lastName} withdrew ${amount}$!`)
            
        }
        return`${isFound['totalMoney']}$`
    }
    customerInfo (personalId) {
        let output = '';
        const isFound = this.allCustomers.find(client => client.personalId === personalId)
        if(!isFound) {
            throw new Error('We have no customer with this ID!')
        } else {
           
            output += `Bank name: ${this._bankName}\nCustomer name: ${isFound.firstName} ${isFound.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${isFound.totalMoney}$\nTransactions:\n`
            let filteredTransractions =  this.transaction.filter(x => x.includes(isFound.firstName)).reverse()
            let counter = filteredTransractions.length
            filteredTransractions.forEach(row => output += `${counter--}. ${row}\n`)
            
        }

        return output.trim()
    }
}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
