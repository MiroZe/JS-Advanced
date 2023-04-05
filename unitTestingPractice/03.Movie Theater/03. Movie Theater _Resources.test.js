const { expect } = require("chai");

const movieTheater = require("./03. Movie Theater _Resources");

describe("Tests movieTheater", function() {
    describe("Test ageRestrictions method", function() {

        it("Test with G param", function() {
            expect(movieTheater.ageRestrictions('G')).equal(`All ages admitted to watch the movie`)
        });
        it("Test with PG param", function() {
            expect(movieTheater.ageRestrictions('PG')).equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`)
        });
        it("Test with R param", function() {
            expect(movieTheater.ageRestrictions('R')).equal(`Restricted! Under 17 requires accompanying parent or adult guardian`)
        });
        it("Test with NG param", function() {
            expect(movieTheater.ageRestrictions('NC-17')).equal(`No one under 17 admitted to watch the movie`)
        });
        it("Test with diffrent param", function() {
            expect(movieTheater.ageRestrictions('a')).equal(`There are no age restrictions for this movie`)
        });
     });

    describe ('Test moneySpent method',()=> {
        it('Test without discount',()=> {
            expect(movieTheater.moneySpent(1,['Nachos'],['Soda'])).to.equal('The total cost for the purchase is 23.50')
        })
        it('Test with discount',()=> {
            expect(movieTheater.moneySpent(10,['Popcorn','Nachos'],['Soda','Water'])).to.equal('The total cost for the purchase with applied discount is 131.60')
        })
        it('Test with invalid params',()=> {
            expect(()=>movieTheater.moneySpent('10',['Popcorn','Nachos'],['Soda','Water'])).to.throw('Invalid input')
        })
        it('Test with invalid params',()=> {
            expect(()=>movieTheater.moneySpent(10,'Popcorn',['Soda','Water'])).to.throw('Invalid input')
        })
        it('Test with invalid params',()=> {
            expect(()=>movieTheater.moneySpent(10,['Popcorn','Nachos'],'Water')).to.throw('Invalid input')
        })
    })

    describe('Test reservation method', ()=> {
        it('Test with invalid params',()=> {
            expect(()=>movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }],'1')).to.throw('Invalid input')
        })
        it('Test with invalid params',()=> {
            expect(()=>movieTheater.reservation({ rowNumber: 1, freeSeats: 7 },1)).to.throw('Invalid input')
        })
        it('Test with invalid params',()=> {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }],6)).to.equal(1)
        })
        it('Test with invalid params',()=> {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 },{ rowNumber: 2, freeSeats: 8 }],5)).to.equal(2)
        })


    })
});
