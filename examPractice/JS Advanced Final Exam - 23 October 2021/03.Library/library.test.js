const { expect } = require('chai');

const library = require('./library')


describe("Main Tests …", function() {

    let test = {}
    beforeEach(()=> test = library)
    
    describe("Test is object", function() {
        it("TODO …", function() {
          
            expect(typeof test).to.deep.eq('object')
        });
     });
    describe ('Test method calcPriceOfBook', ()=> {
        it('Test with standart price',()=> {
            expect(test.calcPriceOfBook('a',1985)).to.equal('Price of a is 20.00')
        }) 
        it('Test with less price',()=> {
            expect(test.calcPriceOfBook('a',1975)).to.equal('Price of a is 10.00')
        })
        it('Test with equal year price',()=> {
            expect(test.calcPriceOfBook('a',1980)).to.equal('Price of a is 10.00')
        })
        it('Test with invalid year ',()=> {
            expect(()=>test.calcPriceOfBook('a',"1980")).to.throw('Invalid input')
        })
        it('Test with invalid name of book ',()=> {
            expect(()=>test.calcPriceOfBook(15,1980)).to.throw('Invalid input')
        })
    })
    describe('Test method findBook',()=>{
        it('Test with 0 length',()=>{
            expect(()=>test.findBook([],'a')).to.throw('No books currently available')
        })
        it('Test with exist book',()=>{
            expect(test.findBook(['a'],'a')).to.equal('We found the book you want.')
        })
        it('Test with not exist book',()=>{
            expect(test.findBook(['a'],'b')).to.equal('The book you are looking for is not here!')
        })
    })
    describe('Test method arrangeTheBooks',()=> {
        it('Test with no integer number count',()=> {
            expect(()=> test.arrangeTheBooks('12')).to.throw('Invalid input')
        })
        it('Test with negative integer number count',()=> {
            expect(()=> test.arrangeTheBooks(-1)).to.throw('Invalid input')
        })
        it('Test with free space to book',()=> {
            expect(test.arrangeTheBooks(35)).to.equal('Great job, the books are arranged.')
        })
        it('Test with no free space to book',()=> {
            expect(test.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.')
        })
        it('Test with equal space for books',()=> {
            expect(test.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
        })
    })
});


