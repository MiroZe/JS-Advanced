function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let textArea =  JSON.parse(document.querySelector('#inputs textarea').value);
      let result = {};
      let biggestAverageSalary =0;
      let currentSalary = 0;
      let bestRestaurant = '';
      for(const data of textArea) {
         
         let restaurantInfo = data.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo.shift().split(', ');
         for (line of workersData) {
            
            let [workerName, salary] =  line.split(' ');
            salary = +salary;
            if (!result[restaurantName]) {
               result[restaurantName] = {};
            } else {
               result[restaurantName][workerName] = salary;
            }
            if(!result[restaurantName][workerName]) {
               result[restaurantName][workerName] = salary
            }
         }
      }
     
      let entries = Object.entries(result);
      for( let entry of entries) {
         let currentSum = 0
         let name = entry[0];
         let length = Object.keys(entry[1]).length;
        
         for (let kvp in entry[1]) {
         currentSum += entry[1][kvp]
         }
         let currentAverage = currentSum / length;
         if(biggestAverageSalary < currentAverage) {
            biggestAverageSalary = currentAverage;
            bestRestaurant = name;
         }

      }
      let sortedArea = Object.entries(result[bestRestaurant])
                        .sort((a,b) => b[1] - a[1]);
            let outputTextTwo = '';
            for ( let elements of sortedArea) {
               outputTextTwo += `Name: ${elements[0]} With Salary: ${elements[1]} `
            }
          let  outputTextOne = `Name: ${bestRestaurant} Average Salary: ${biggestAverageSalary.toFixed(2)} Best Salary: ${(sortedArea[0][1]).toFixed(2)}`;
          console.log(outputTextOne);
          let firstField = document.querySelector('#bestRestaurant p');
          firstField.textContent = outputTextOne;
          let secondField = document.querySelector('#workers p');
          secondField.textContent = outputTextTwo;
   }
}
