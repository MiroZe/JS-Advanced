
const { expect } = require("chai");

const motorcycleRider = require("./Motorcycle Rider");

describe("Tests motorcycleRider", function() {
    let test;
    beforeEach(()=> test = motorcycleRider)


    describe("Test licenseRestriction method", function() {
        it("Test category AM ", function() {
          expect (test.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.') 
        });
        it("Test category A1 ", function() {
            expect (test.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.') 
          });
        it("Test category A2 ", function() {
            expect (test.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.') 
          });
        it("Test category A2 ", function() {
            expect (test.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.') 
          });
        it("Test with invalid category B3 ", function() {
            expect(()=>test.licenseRestriction('B3')).to.throw('Invalid Information!') 
          });
        it("Test with no string", function() {
            expect(()=>test.licenseRestriction(1)).to.throw('Invalid Information!') 
          });
     });
     describe('Test method motorcycleShowroom ', ()=> {
        it('Test with incorrect array', ()=> {
            expect(()=>test.motorcycleShowroom([1],1)).to.throw('Invalid Information!')
        })
        it('Test with incorrect array', ()=> {
            expect(()=>test.motorcycleShowroom(1,1)).to.throw('Invalid Information!')
        })
        it('Test with incorrect number', ()=> {
            expect(()=>test.motorcycleShowroom(['125'],'125')).to.throw('Invalid Information!')
        })
        it('Test with invalid invalid info', ()=> {
            expect(()=>test.motorcycleShowroom(['125'],-1)).to.throw('Invalid Information!')
        })
        it('Test with empty array', ()=> {
            expect(()=>test.motorcycleShowroom([],125)).to.throw('Invalid Information!')
        })
        it('Test with less than 50', ()=> {
            expect(()=>test.motorcycleShowroom(['45'],45)).to.throw('Invalid Information!')
        })
        it('Test with normal params', ()=> {
            expect(test.motorcycleShowroom(['125','250'],250)).to.equal('There are 2 available motorcycles matching your criteria!')
        })
        it('Test with normal params', ()=> {
            expect(test.motorcycleShowroom(['125','251'],250)).to.equal('There are 1 available motorcycles matching your criteria!')
        })
        it('Test with no matches', ()=> {
            expect(test.motorcycleShowroom(['500','750'],250)).to.equal('There are 0 available motorcycles matching your criteria!')
        })
     })
     describe('Test otherSpendings method',()=>{
        it('Test with normal params and discount = false', ()=> {
            expect(test.otherSpendings(['helmet'],['engine oil'],false)).to.equal('You spend $270.00 for equipment and consumables!')
        })
        it('Test with normal params and discount = false', ()=> {
            expect(test.otherSpendings(['jacked'],['oil filter'],false)).to.equal('You spend $330.00 for equipment and consumables!')
        })
        it('Test with normal params and discount = false', ()=> {
            expect(test.otherSpendings(['helmet'],['oil filter'],false)).to.equal('You spend $230.00 for equipment and consumables!')
        })
        it('Test with normal params and discount = true', ()=> {
            expect(test.otherSpendings(['helmet'],['oil filter'],true)).to.equal('You spend $207.00 for equipment and consumables with 10% discount!')
        })
        it('Test with normal params and discount = true', ()=> {
            expect(test.otherSpendings(['jacked'],['oil filter'],true)).to.equal('You spend $297.00 for equipment and consumables with 10% discount!')
        })
        it('Test with nevalid boolean', ()=> {
            expect(()=>test.otherSpendings(['jacked'],['oil filter'],'true')).to.throw('Invalid Information!')
        })
        it('Test with nevalid first array', ()=> {
            expect(()=>test.otherSpendings('jacked',['oil filter'],true)).to.throw('Invalid Information!')
        })
        it('Test with nevalid second array', ()=> {
            expect(()=>test.otherSpendings(['jacked'],'oil filter',true)).to.throw('Invalid Information!')
        })

     })
     
});
