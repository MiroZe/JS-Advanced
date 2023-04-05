const { expect } = require("chai");

const testNumbers = require("./testNumbers");


describe("Tests testNumbers", function() {
    describe("Test sumNumber method", function() {
        it("Test with  number one as string", function() {
            expect(testNumbers.sumNumbers('1',1)).to.equal(undefined)
        });
        it("Test with  number second as string", function() {
            expect(testNumbers.sumNumbers(1,'1')).to.equal(undefined)
        });
        it("Test with  negative first number", function() {
            expect(testNumbers.sumNumbers(-2,1)).to.equal('-1.00')
        });
        it("Test with  negative second number", function() {
            expect(testNumbers.sumNumbers(1,-1)).to.equal('0.00')
        });
        it("Test with  positive numbers", function() {
            expect(testNumbers.sumNumbers(1,1)).to.equal('2.00')
        });
        it("Test with  floating numbers", function() {
            expect(testNumbers.sumNumbers(1.11,1)).to.equal('2.11')
        });
        it("Test with  floating numbers", function() {
            expect(testNumbers.sumNumbers(1,1.11)).to.equal('2.11')
        });
     });
     describe('Test numberChecker method', ()=> {
        it('Test with not number param',()=> {
            expect(()=> testNumbers.numberChecker('a')).to.throw('The input is not a number!')
        })
        it('Test with not number param',()=> {
            expect(()=> testNumbers.numberChecker('false')).to.throw('The input is not a number!')
        })
        it('Test with even number param',()=> {
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!')
        })
        it('Test with even number param',()=> {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!')
        })
        it('Test with 0 param',()=> {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!')
        })
        it('Test with odd param',()=> {
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!')
        })
        it('Test with negative odd param',()=> {
            expect(testNumbers.numberChecker(-3)).to.equal('The number is odd!')
        })
        it('Test with string odd param',()=> {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!')
        })
     })
     describe('Test averageSumArray method', ()=> {
        it('Test with correct params',()=> {
            expect(testNumbers.averageSumArray([1,1,1])).to.equal(1)
        })
        it('Test with one params',()=> {
            expect(testNumbers.averageSumArray([1])).to.equal(1)
        })
        it('Test with string as params',()=> {
            expect(testNumbers.averageSumArray(['1'])).to.equal(1)
        })
        it('Test with 0 as params',()=> {
            expect(testNumbers.averageSumArray([0])).to.equal(0)
        })
     })
     
});
