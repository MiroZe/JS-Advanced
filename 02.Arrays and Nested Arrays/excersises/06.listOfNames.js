function listOfNames(input) {
    let number = 1;
    input.sort((a,b) => a.localeCompare(b));
    
    input.forEach(element => {
        console.log(`${number}.${element}`);
        number++;
    });
    }
    listOfNames(["John", "Bob", "Christina", "Ema"])