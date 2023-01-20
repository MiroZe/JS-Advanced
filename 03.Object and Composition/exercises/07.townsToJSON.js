function townsToJSON(input) {
    
    
    let params = input.shift();
    let result = [];
    

for ( let element of input) {
    let[town,latitude,longitude] = element.split(' | ');
    let obj = {};
    town = town.split('| ');
    town = town[1].toString();
    latitude= Number(latitude).toFixed(2)
    latitude = +latitude;
    longitude =longitude.split(' |');
    longitude = Number(longitude[0]).toFixed(2)
    longitude = + longitude;
    
    obj.Town = town;
    obj.Latitude = latitude;
    obj.Longitude = longitude;
    result.push(obj)
    
}
let parsed = JSON.stringify(result);
return parsed;
}
console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']

))