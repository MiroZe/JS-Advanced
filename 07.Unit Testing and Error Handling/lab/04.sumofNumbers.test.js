let expect = require('chai').expect
const {sum} = require('./04.sumOfNumbers')

describe ('Test', () => {
    it ('works with array', () => {
       
        expect(sum([2,5,4])).to.be.equal(11)
    })

    it ('works with empty array', ()=> {
        expect(sum([])).to.be.equal(0)
    })
})




