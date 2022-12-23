function sortAnArrayByTwo(input) {

    input.sort( (a,b) => a.length - b.length || a.localeCompare(b));

    input.forEach(element => { console.log(element)
        
    });

}sortAnArrayByTwo['alpha', 
'beta', 
'gamma']
()