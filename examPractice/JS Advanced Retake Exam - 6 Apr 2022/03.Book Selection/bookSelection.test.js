const { expect } = require('chai');

const bookSelection = require('./bookSelection')




describe("Test", function() {
    let test = {}
    beforeEach(()=> test = bookSelection)
    describe("Generak Tes", function() {
 
        it("Test is object", function() {
           const test = bookSelection;
           expect(typeof test).to.deep.equal("object")
        });
     });
     describe('Test method isGenreSuitable',()=> {
         const test = bookSelection;
        it('Test with valid parameters',()=> {
            expect(test.isGenreSuitable('Horror',10)).to.equal('Books with Horror genre are not suitable for kids at 10 age')

        })
     })
     it('Test with valid params',()=> {
        expect(test.isGenreSuitable('Horror',17)).to.equal('Those books are suitable')

    })
    it('Test with kids genre params',()=> {
        expect(test.isGenreSuitable('Kids',9)).to.equal('Those books are suitable')

    })
    describe('Test isItAffordable method',()=>{
        it('Test with valid parameters ',()=>{
            expect(test.isItAffordable(1,2)).to.equal('Book bought. You have 1$ left')
        } )
        it('Test with higher than budget price parameters ',()=>{
            expect(test.isItAffordable(2,1)).to.equal('You don\'t have enough money')
        } )
        it('Test with invalid price parameter ',()=>{
            expect(()=>test.isItAffordable("2",1)).to.throw('Invalid input')
        } )
        it('Test with invalid budget parameter ',()=>{
            expect(()=>test.isItAffordable(2,"1")).to.throw('Invalid input')
        } )
    } )
    describe('Test suitableTitles method', ()=>{
        it('Test with invalid books param',()=>{
            expect(()=> test.suitableTitles('TestBook','Horror')).to.throw('Invalid input')
        })
        it('Test with invalid ganre param',()=>{
            expect(()=> test.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }],['Horror'])).to.throw('Invalid input')
        })
        it('Test with invalid ganre param',()=>{
            expect(()=> test.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }],['Horror'])).to.throw('Invalid input')
        })
        it('Test with valid ganre param',()=>{
            expect(test.suitableTitles([{ title:'1', genre: "Thriller" }],'Thriller')).to.deep.equal(['1'])
        })
    })

});
