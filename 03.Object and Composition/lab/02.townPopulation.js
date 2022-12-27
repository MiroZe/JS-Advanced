function townPopulation(input) {

    let towns = {};
    for ( let line of input ) {
        let[name, population] = line.split(' <-> ');
        population = +population;
        
        if(!towns[name]) {
            towns[name] = 0;
            

        }
        towns[name] += population;
            
    }
for ( let town in towns) {
    console.log(`${town} : ${towns[town]}`);
}
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)