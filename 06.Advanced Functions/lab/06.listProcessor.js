function innerProcessor(input) {
    let result = [];

    let obj = {
        add: (s) => result.push(s),
        remove: (s) => {
            while (result.includes(s)) {
                let index = result.indexOf(s)
                result.splice(index, 1);
            }
            
        },
        print: () => console.log(result.join(','))
    };
    
    for (let line of input) {
        const [command, word] = line.split(' ')
        obj[command](word);
                  
        }
    

}
innerProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])