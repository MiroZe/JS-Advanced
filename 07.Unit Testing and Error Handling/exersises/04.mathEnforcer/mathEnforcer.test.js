const { expect } = require('chai')
const {mathEnforcer} = require('./mathEnforcer')


describe('Math Enforcer' , ()=>{
    describe('AddFive', ()=> {
        it('Test1 AddFive with a non-number parameter',()=>{
            expect(mathEnforcer.addFive('1')).to.be.equal(undefined)
        });
        it('Test2 AddFive with a number parameter',()=>{
            expect(mathEnforcer.addFive(1)).to.be.equal(6)
        });
        it('Test3 AddFive with a negative number parameter',()=>{
            expect(mathEnforcer.addFive(-1)).to.be.equal(4)
        });
        it('Test4 AddFive with a floating point number parameter',()=>{
            expect(mathEnforcer.addFive(2.212)).to.be.closeTo(7.212,0.01)
        });

    })
    describe('subtractTen', ()=> {
        it('Test1 subtractTen with a non-number parameter',()=>{
            expect(mathEnforcer.subtractTen('1')).to.be.equal(undefined)
        });
        it('Test2 subtractTen with a number parameter',()=>{
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0)
        });
        it('Test3 subtractTen with a negative number parameter',()=>{
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11)
        });
        it('Test4 subtractTen with a floating point number parameter',()=>{
            expect(mathEnforcer.subtractTen(12.212)).to.be.closeTo(2.212,0.01)
        });
        it('Test4 subtractTen with negative floating point numbers parameter',()=>{
            expect(mathEnforcer.subtractTen(-12.21233)).to.be.closeTo(-22.21233,0.01)
        });

    })
    describe('sum', ()=> {
        it('Test1 sum with a non-number parameter',()=>{
            expect(mathEnforcer.sum('1',1)).to.be.equal(undefined)
            expect(mathEnforcer.sum(1,'1')).to.be.equal(undefined)
        });
        it('Test2 sum with a numbers parameter',()=>{
            expect(mathEnforcer.sum(10,10)).to.be.equal(20)
        });
        it('Test3 sum with a negative number parameter',()=>{
            expect(mathEnforcer.sum(-1,-5)).to.be.equal(-6)
            expect(mathEnforcer.sum(-1,5)).to.be.equal(4)
        });
        it('Test4 sum with a floating point number parameter',()=>{
            expect(mathEnforcer.sum(12.212,25.154)).to.be.closeTo(0.01,37.366)
        });
        it('Test5 sum with negative floating point numbers parameter',()=>{
            expect(mathEnforcer.sum(-12.21,-25.15)).to.be.closeTo(-37.36,0.01)
        });

    })

})