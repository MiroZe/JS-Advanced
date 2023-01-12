function solve(input, criteria) {
    let result = JSON.parse(input);
    if (criteria !== "all") {
      let [type, description] = criteria.split("-");
      result
        .filter((x) => x[type] === description)
        .forEach((element, index) => {
          console.log(
            `${index}. ${element.first_name} ${element.last_name} - ${element.email}`
          );
        });
    } else {
      result.forEach((element, index) =>
        console.log(
          `${index}. ${element.first_name} ${element.last_name} - ${element.email}`
        )
      );
    }
  }
  solve(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')
