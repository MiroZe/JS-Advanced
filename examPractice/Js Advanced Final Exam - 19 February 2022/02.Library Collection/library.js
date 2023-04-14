class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];

    }

    test(array,bookName) {
       let found =  array.find(element => element.bookName === bookName)
             return found
    }
    addBook(bookName, bookAuthor){
        if(this.capacity === 0) {
            throw new Error('Not enough space in the collection.')
        }
        let newBook = {
            bookName,
            bookAuthor,
            payed: false

        }
        this.books.push(newBook);
        this.capacity -= 1;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`

    }
    payBook( bookName ) {
    let isBookExist = this.test(this.books,bookName)
    if(!isBookExist) {
        throw new Error(`${bookName} is not in the collection.`)
    }
    if(isBookExist.payed) {
        throw new Error(`${bookName} has already been paid.`)
    }
    isBookExist.payed = true;
    return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
     let isFound = this.test(this.books,bookName)
     if(!isFound) {
        throw new Error ('The book, you\'re looking for, is not found.')
     }
     if(!isFound.payed) {
        throw new Error (`${bookName} need to be paid before removing from the collection.`)
     }
     let index = this.books.indexOf(isFound);
     this.books.splice(index,1);
     return `${bookName} remove from the collection.`
        
    }
    getStatistics(bookAuthor) {
        let output = ''
        if(!bookAuthor) {
            output += `The book collection has ${this.capacity} empty spots left.\n`
            let sorted = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName))
            .forEach(element => {
                if(element.payed === true) {
                    output+= `${element.bookName} == ${element.bookAuthor} - Has Paid.\n`
                } else {
                    output+= `${element.bookName} == ${element.bookAuthor} - Not Paid.\n`
                }
            })

            } else {
                let found = this.books.find(element => element.bookAuthor === bookAuthor)
                if(found){

                    this.books.forEach(element => {
                        if(element.payed === true) {
                            output+= `${element.bookName} == ${element.bookAuthor} - Has Paid.\n`
                        } else {
                            output+= `${element.bookName} == ${element.bookAuthor} - Not Paid.\n`
                        }
                    })
                } else {
                    throw new Error (`${bookAuthor} is not in the collection.`)
                }
            }
            return output.trim()
        
        }
    
}
const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));




