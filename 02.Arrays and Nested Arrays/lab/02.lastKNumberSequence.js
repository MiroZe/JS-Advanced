function lastKNumbers (n,k) {


let arr = [1]

//[1, 1, 2, 4, 7, 13]

for ( let i = 0; i < n -1 ; i++) {
    let currentSum = 0;
    for ( let m = 0; m < k; m++) {
        if(arr[i - m]){
            currentSum += arr[i - m] 
        }
        
    }
    arr.push(currentSum)
    
}
return arr;
}
lastKNumbers(8,2)