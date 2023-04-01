class Company {

constructor() {
    this.departments = {}
    this.bestName = ''
    this.average = 0;

   
}

addEmployee(name, salary, position, department){
    salary = Number(salary)
    if(!name || !salary || !position ||!department || salary < 0) {
        throw new Error ('Invalid input!')
    }
  
    let temp = {
        name,
        salary,
        position
    }
    if(!this.departments[department]) {
    this.departments[department]= []
}
    this.departments[department].push(temp)
   
   
   
    return `New employee is hired. Name: ${name}. Position: ${position}`


}
bestDepartment() {
    for (let key in this.departments) {
        let sum = 0;
        let currentAverage = 0
        for(let element of this.departments[key]){
            sum += element.salary
        }
        
        currentAverage = sum / this.departments[key].length
        if(this.average < currentAverage) {
            this.average = currentAverage
            this.bestName =  key
        }
    }
    let output = [`Best Department is: ${this.bestName}`]
    output.push(`Average salary: ${this.average.toFixed(2)}`)
    this.departments[this.bestName].sort((a,b)=> b.salary -a.salary || a.name.localeCompare(b.name))
    .forEach(element => {
        output.push(`${element.name} ${element.salary} ${element.position}`)
    });

    return output.join('\n')

}

}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

