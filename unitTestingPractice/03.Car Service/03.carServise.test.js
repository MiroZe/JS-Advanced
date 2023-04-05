
const { expect } = require('chai');

const carService = require('./03. Car Service_Resources')


describe("Test carService", function() {
    let test;
    beforeEach(()=> test = carService )
    describe("Test isItExpensive method", function() {

        it("Test with engine param", function() {
            expect(test.isItExpensive('Engine') ).to.equal('The issue with the car is more severe and it will cost more money')
        });
        it("Test with Transmission param", function() {
            expect(test.isItExpensive('Transmission') ).to.equal('The issue with the car is more severe and it will cost more money')
        });
        it("Test with other param", function() {
            expect(test.isItExpensive('Trans') ).to.equal('The overall price will be a bit cheaper')
        });

     });
     describe('TEst method discount ',()=> {

        it('Test with higher than 2 and smaller than 7', ()=> {
            expect(test.discount(3,10)).to.equal('Discount applied! You saved 1.5$')
        })
        it('Test with  7 ', ()=> {
            expect(test.discount(7,10)).to.equal('Discount applied! You saved 1.5$')
        })
        it('Test with higher than 7 ', ()=> {
            expect(test.discount(8,10)).to.equal('Discount applied! You saved 3$')
        })
        it('Test with higher smaller than 2 ', ()=> {
            expect(test.discount(1,10)).to.equal('You cannot apply a discount')
        })
        it('Test with 2 ', ()=> {
            expect(test.discount(2,10)).to.equal('You cannot apply a discount')
        })
        it('Test with negative count ', ()=> {
            expect(test.discount(-1,10)).to.equal('You cannot apply a discount')
        })
        it('Test with floatng count ', ()=> {
            expect(test.discount(10.50,10)).to.equal('Discount applied! You saved 3$')
        })
        it('Test with nevalid numbers ', ()=> {
            expect(()=>test.discount('1',10)).to.throw('Invalid input')
        })
        it('Test with nevalid numbers ', ()=> {
            expect(()=>test.discount(1,'10')).to.throw('Invalid input')
        })
        it('Test with 0 ', ()=> {
            expect(test.discount(0,10)).to.equal('You cannot apply a discount')
        })

     })
     describe('Test method partsToBuy ',()=> {
        it('Test with 0', ()=> {
            expect(test.partsToBuy([],['a','b'])).to.equal(0)
        })
        it('Test with correct params', ()=> {
            expect(test.partsToBuy([{part:'a',price:10}],['a'])).to.equal(10)
        })
        it('Test with correct params', ()=> {
            expect(test.partsToBuy([{part:'a',price:10},{part:'b',price:20}],['a','b'])).to.equal(30)
        })
        it('Test with incorrect params', ()=> {
            expect(()=>test.partsToBuy({part:'a',price:10},{part:'b',price:20},['a','b'])).to.throw('Invalid input')
        })
        it('Test with incorrect params', ()=> {
            expect(()=>test.partsToBuy([{part:'a',price:10}],{a:10})).to.throw('Invalid input')
        })
        it('Test with incorrect params', ()=> {
            expect(()=>test.partsToBuy([{part:'a',price:10}],'a')).to.throw('Invalid input')
        })
     })

     
});


