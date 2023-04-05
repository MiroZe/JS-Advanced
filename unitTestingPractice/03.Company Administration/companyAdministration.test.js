const { expect } = require("chai");
const companyAdministration = require("./companyAdministration");

describe("Tests companyAdministration", function () {
    describe("Test hiringEmployee method ", function () {
        it("Test with is different from Programmer, ", function () {
            expect(() => companyAdministration.hiringEmployee('a', 'a', 5)).to.throw()
        });
        it("Test with age > 3, ", function () {
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 4)).to.equal('a was successfully hired for the position Programmer.')
        });
        it("Test with age = 3, ", function () {
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 3)).to.equal('a was successfully hired for the position Programmer.')
        });
        it("Test with age < 3, ", function () {
            expect(companyAdministration.hiringEmployee('a', 'Programmer', 2)).to.equal('a is not approved for this position.')
        });
    });
    describe('Test method calculateSalary', () => {
        it('Test with invalid number', () => {
            expect(()=>companyAdministration.calculateSalary('1')).to.throw('Invalid hours')
        })
        it('Test with negative number', () => {
            expect(()=>companyAdministration.calculateSalary(-1)).to.throw('Invalid hours')
        })
        it('Test with normal param', () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150)
        })
        it('Test with normal param', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415)
        })
        it('Test with floating param', () => {
            expect(companyAdministration.calculateSalary(1.1)).to.equal(16.50)
        })
    })
    describe('Test method firedEmployee ', () => {
        it('Test with normal params',()=> {
           expect(companyAdministration.firedEmployee(['a','b','c'],1)).to.equal('a, c')
        })
        it('Test with one empl',()=> {
            expect(companyAdministration.firedEmployee(['a'],0)).to.equal('')
         })
         it('Test with negative index',()=> {
            expect(()=>companyAdministration.firedEmployee(['a','b'],-1)).to.throw('Invalid input')
         })
         it('Test with bigger than length index',()=> {
            expect(()=>companyAdministration.firedEmployee(['a','b'],5)).to.throw('Invalid input')
         })
         it('Test with index as string',()=> {
            expect(()=>companyAdministration.firedEmployee(['a','b'],'1')).to.throw('Invalid input')
         })
         it('Test with array as string',()=> {
            expect(()=>companyAdministration.firedEmployee('aa','1')).to.throw('Invalid input')
         })
    })

});
