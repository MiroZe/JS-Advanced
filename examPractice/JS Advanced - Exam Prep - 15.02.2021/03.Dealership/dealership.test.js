const dealership = require("./dealership");

const {expect} =  require('chai')

describe("Tests …", function() {

    let test = {}
    beforeEach(()=> test = dealership)

    describe("Test newCarCost method", function() {

        it("Test with exist car", function() {
            expect(test.newCarCost('Audi A4 B8',20000)).to.equal(5000)
        });

        it("Test with not exist car", function() {
            expect(test.newCarCost('a',20000)).to.equal(20000)
        });

     });
     describe('Test carEquipment method',()=> {
        it('Test with valid params',()=>{
            expect(test.carEquipment(['a','b','c','d'],[0,2,3])).to.deep.equal(['a','c','d'])
        })

     });
     describe('Test euroCategory method',()=>{
        it('Test with 4 category',()=>{
            
            expect(test.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        })
        it('Test with 5 category',()=>{
            
            expect(test.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
        })
        it('Test with 3 category',()=>{
            
         expect(test.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!')
        
        })
        
     })

});
