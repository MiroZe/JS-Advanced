function createSortedList() {
let array =[];
function sort (array) {
    array.sort((a,b) => a-b)
}

let result = {
    add :(element) =>{
        result.size ++;
     array.push(element)      
     sort(array)
    },
    remove: (index) => {
        if (index >= 0 && index < array.length){
            result.size --
            array.splice(index,1);
           
            return array
        }
    }, 
    get: (index) => {
        if (index >= 0 && index < array.length) {
        let value = array[index];
        return value;
        }
    },
    size: 0


}

 return result

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));





