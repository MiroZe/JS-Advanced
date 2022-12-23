function extractSubset(input) {

    let result = [];
    let firstElement = input[0];
    result.push(firstElement)

    let arr = input.reduce((accumulator, element) => {
        if(element >= firstElement) {
    
            result.push(element)
            firstElement = element
        }
       
    })
    return (result);
}
extractSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )