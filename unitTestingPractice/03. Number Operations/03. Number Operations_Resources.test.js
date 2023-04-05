const { expect } = require("chai");

const numberOperations = require("./03. Number Operations_Resources");

describe("Tests numberOperations", function() {
    describe("Test powNumber method", function() {
        it("Test with correct num", function() {
            expect(numberOperations.powNumber(2)).to.equal(4)
        });
        it("Test with 0 ", function() {
            expect(numberOperations.powNumber(0)).to.equal(0)
        });
        it("Test with negative number ", function() {
            expect(numberOperations.powNumber(-1)).to.equal(1)
        });
     });
    describe('Test numberChecker method',()=> {
        it('TEst with string',()=> {
            expect(()=>numberOperations.numberChecker('a')).to.throw()
        })
        it('TEst with string',()=> {
            expect(()=>numberOperations.numberChecker('false')).to.throw()
        })
        it('TEst with lower 100 number',()=> {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!')
        })
        it('TEst with  100 number',()=> {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!')
        })
        it('TEst with  > 100 number',()=> {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!')
        })
        it('TEst with  string as number',()=> {
            expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!')
        })
        it('TEst with lower 100 number',()=> {
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!')
        })
    })
    describe('Test sumArrays method',()=> {
        it('Test with normal params',()=>{
            
        })

    })
});
