
const { expect } = require("chai");

const chooseYourCar = require("./chooseYourCar");

describe("Test chooseYourCar", function() {
    let test ;
    beforeEach(()=> test = chooseYourCar )
    describe("Test choosingType method", function() {
        it("Test with less than 1900 year", function() {
            expect(()=>test.choosingType('a','b',1887)).throw('Invalid Year!')
        });
        it("Test with less than 2030 year", function() {
            expect(()=>test.choosingType('a','b',2030)).throw('Invalid Year!')
        });
        it("Test with value different of sedan", function() {
            expect(()=>test.choosingType('a','b',2000)).throw('This type of car is not what you are looking for.')
        });
        it("Test with  2010 year", function() {
            expect(test.choosingType('Sedan','blue',2010)).to.equal('This blue Sedan meets the requirements, that you have.')
        });
        it("Test with  2011 year", function() {
            expect(test.choosingType('Sedan','blue',2011)).to.equal('This blue Sedan meets the requirements, that you have.')
        });
        it("Test with  2008 year", function() {
            expect(test.choosingType('Sedan','blue',2008)).to.equal('This Sedan is too old for you, especially with that blue color.')
        });
     });
     describe('Test brandName method ',()=> {
        it('Test with normal params with index 1',()=> {
            expect(test.brandName(['a','b','c'],1)).to.equal(`a, c`)
        })
        it('Test with normal params with index 0',()=> {
            expect(test.brandName(['a','b','c'],0)).to.equal(`b, c`)
        })
        it('Test with negative index',()=> {
            expect(()=>test.brandName(['a','b','c'],-1)).to.throw('Invalid Information!')
        })
        it('Test with bigger index',()=> {
            expect(()=>test.brandName(['a','b','c'],25)).to.throw('Invalid Information!')
        })
        it('Test with no integer index',()=> {
            expect(()=>test.brandName(['a','b'],'1')).to.throw('Invalid Information!')
        })
        it('Test with no floating index',()=> {
            expect(()=>test.brandName(['a','b'],1.1)).to.throw('Invalid Information!')
        })
        it('Test with no array as first param',()=> {
            expect(()=>test.brandName('a',0)).to.throw('Invalid Information!')
        })
        it('Test with no array as boolean param',()=> {
            expect(()=>test.brandName(true,0)).to.throw('Invalid Information!')
        })
        it('Test with empty array',()=> {
            expect(()=>test.brandName([],0)).to.throw('Invalid Information!')
        })
     })
     describe ('Test CarFuelConsumption method',()=> {
        it('Test with normal params 7',()=> {
            expect(test.carFuelConsumption(100,7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.')
        })
        it('Test with normal params 6.5',()=> {
            expect(test.carFuelConsumption(100,6.5)).to.equal('The car is efficient enough, it burns 6.50 liters/100 km.')
        })
        it('Test with more than 7 consumption',()=> {
            expect(test.carFuelConsumption(100,7.5)).to.equal('The car burns too much fuel - 7.50 liters!')
        })
        it('Test with more 10 consumption',()=> {
            expect(test.carFuelConsumption(100,10)).to.equal('The car burns too much fuel - 10.00 liters!')
        })
        it('Test with negative kms',()=> {
            expect(()=>test.carFuelConsumption(-100,10)).to.throw('Invalid Information!')
        })
        it('Test with negative kms',()=> {
            expect(()=>test.carFuelConsumption(100,-10)).to.throw('Invalid Information!')
        })
        it('Test with no numbers kms',()=> {
            expect(()=>test.carFuelConsumption('100',7)).to.throw('Invalid Information!')
        })
        it('Test with no numbers kms',()=> {
            expect(()=>test.carFuelConsumption(100,'7')).to.throw('Invalid Information!')
        })
     })
});
