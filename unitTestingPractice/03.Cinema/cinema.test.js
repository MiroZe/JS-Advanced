
const { expect } = require("chai");

const cinema = require("./cinema");




describe("Tests cinema", function() {
    let test;
    beforeEach(()=> test = cinema )

    describe("Test showMovies method", function() {
        it("Test the array movies with 0 length", function() {
            let arr = []
            expect(test.showMovies(arr)).to.equal('There are currently no movies to show.')
        });
        it("Test the array movies normal params", function() {
            expect(test.showMovies(['a','b','c'])).to.equal('a, b, c')
        });
        it("Test the array movies one params", function() {
            expect(test.showMovies(['a'])).to.equal('a')
        });
     });
     describe('Test ticketPrice method',()=>{
        it('Test with not existing type',()=> {
            expect(()=>test.ticketPrice('p')).to.throw('Invalid projection type.')
        })
        it('Test with type Premiere',()=> {
            expect(test.ticketPrice('Premiere')).to.equal(12)
        })
        it('Test with type Normal',()=> {
            expect(test.ticketPrice('Normal')).to.equal(7.50)
        })
        it('Test with type Discount',()=> {
            expect(test.ticketPrice('Discount')).to.equal(5.50)
        })
     })
     describe('Test swapSeatsInHall method',()=> {
        it('Tets with normal params',()=> {
            expect(test.swapSeatsInHall(5,6)).to.equal('Successful change of seats in the hall.')
        })
        it('Tets with missed one param',()=> {
            expect(test.swapSeatsInHall(5)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with first param as string ',()=> {
            expect(test.swapSeatsInHall('1',5)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with second param as string ',()=> {
            expect(test.swapSeatsInHall(1,'5')).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with second param greater than 20 ',()=> {
            expect(test.swapSeatsInHall(1,21)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with first param greater than 20 ',()=> {
            expect(test.swapSeatsInHall(21,10)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with first param 0 ',()=> {
            expect(test.swapSeatsInHall(0,10)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with second param 0 ',()=> {
            expect(test.swapSeatsInHall(10,0)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with first param  < 0 ',()=> {
            expect(test.swapSeatsInHall(-10,1)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with second param  < 0 ',()=> {
            expect(test.swapSeatsInHall(10,-1)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with equal params  < 0 ',()=> {
            expect(test.swapSeatsInHall(10,10)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with outbound params   ',()=> {
            expect(test.swapSeatsInHall(0,21)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with outbound params   ',()=> {
            expect(test.swapSeatsInHall(21,0)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with floating numbers params   ',()=> {
            expect(test.swapSeatsInHall(5.5,4.4)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with fisrt param floating number',()=> {
            expect(test.swapSeatsInHall(5.5,4)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('Tets with second param floating number',()=> {
            expect(test.swapSeatsInHall(1,4.4)).to.equal('Unsuccessful change of seats in the hall.')
        })
        
        
     })
   
});
