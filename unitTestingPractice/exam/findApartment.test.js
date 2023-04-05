const { expect } = require("chai");

const findNewApartment = require("./findApartment");






describe("Tests findNewApartment object", function() {
    describe("Test isGoodLocation mthod ", function() {

        it("Test with not exist city", function() {
            expect(findNewApartment.isGoodLocation('Svilengrad',true)).to.equal('This location is not suitable for you.')
        });
        it("Test with false boolean", function() {
            expect(findNewApartment.isGoodLocation('Sofia',false)).to.equal('There is no public transport in area.')
        });
        it("Test with correct params", function() {
            expect(findNewApartment.isGoodLocation('Sofia',true)).to.equal('You can go on home tour!')
        });
        it("Test with city not a string", function() {
            expect(()=>findNewApartment.isGoodLocation(['Sofia'],true)).to.throw('Invalid input!')
        });
        it("Test with city not a string", function() {
            expect(()=>findNewApartment.isGoodLocation(22,true)).to.throw('Invalid input!')
        });
        it("Test with bolean as string", function() {
            expect(()=>findNewApartment.isGoodLocation('Sofia','true')).to.throw('Invalid input!')
        });
        it("Test with bolean as string", function() {
            expect(()=>findNewApartment.isGoodLocation('Sofia',[false])).to.throw('Invalid input!')
        });

     });
     describe('Test isLargeEnough method', ()=> {
        it("Test not array param", function() {
            expect(()=> findNewApartment.isLargeEnough(20,20)).throw('Invalid input!')
        });
        it("Test not number params", function() {
            expect(()=> findNewApartment.isLargeEnough([20],'20')).throw('Invalid input!')
        });
        it("Test not number params", function() {
            expect(()=> findNewApartment.isLargeEnough([],'20')).throw('Invalid input!')
        });
        it("Test with valid params", function() {
            expect(findNewApartment.isLargeEnough([1],1)).to.equal('1')
        });
        it("Test with valid params", function() {
            expect(findNewApartment.isLargeEnough([20],1)).to.equal('20')
        });
        it("Test with valid params", function() {
            expect(findNewApartment.isLargeEnough([2,3,4],1)).to.equal('2, 3, 4')
        });

     })
     describe('Test isItAffordable method', ()=> {
        it('Test with smaller budget',()=> {
            expect(findNewApartment.isItAffordable(2,1)).to.equal('You don\'t have enough money for this house!')
        })
        it('Test with equal budget',()=> {
            expect(findNewApartment.isItAffordable(1,1)).to.equal('You can afford this home!')
        })
        it('Test with bigger budget',()=> {
            expect(findNewApartment.isItAffordable(1,2)).to.equal('You can afford this home!')
        })
        it('Test with 0 price',()=> {
            expect(()=> findNewApartment.isItAffordable(0,2)).to.throw('Invalid input!')
        })
        it('Test with 0 budget',()=> {
            expect(()=> findNewApartment.isItAffordable(2,0)).to.throw('Invalid input!')
        })
        it('Test with negative budget',()=> {
            expect(()=> findNewApartment.isItAffordable(2,-2)).to.throw('Invalid input!')
        })
        it('Test with negative price',()=> {
            expect(()=> findNewApartment.isItAffordable(-2,2)).to.throw('Invalid input!')
        })
        it('Test with string price',()=> {
            expect(()=> findNewApartment.isItAffordable('1',2)).to.throw('Invalid input!')
        })
        it('Test with string budget',()=> {
            expect(()=> findNewApartment.isItAffordable(1,'2')).to.throw('Invalid input!')
        })


     })

     
});
