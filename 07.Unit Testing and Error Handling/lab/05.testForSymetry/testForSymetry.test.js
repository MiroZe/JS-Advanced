
const { expect } = require('chai');
const {isSymmetric} = require('./testForSymetry')

describe('Symetric Array tests', () => {

it('Test with simetric array', ()=>{
    expect(isSymmetric([1,2,2,1])).to.be.equal(true)
})
it('Test with no array params', ()=>{
    expect(isSymmetric(25,15)).to.be.equal(false)
})
it('Test with empty array', ()=>{
    expect(isSymmetric([])).to.be.equal(true)
})
it('Test with  array of strings', ()=>{
    expect(isSymmetric(['one','two','three','four'])).to.be.equal(false)
})
it('Test with  odd elements', ()=>{
    expect(isSymmetric([1,2,1])).to.be.equal(true)
})
it('Test with non symmetric array', ()=>{
    expect(isSymmetric([1,2,15,25])).to.be.equal(false)
})
it('Test with one param', ()=>{
    expect(isSymmetric([1])).to.be.equal(true)
})
it('Test without params', ()=>{
    expect(isSymmetric()).to.be.equal(false)
})
it('Test with string input', ()=>{

    let input = 'String'
    let act = isSymmetric(input)
    expect(act).to.be.equal(false)
})
it('Test with  string params array', ()=>{

    let input = ['a','b','b','a']
    let act = isSymmetric(input)
    expect(isSymmetric(input)).to.be.equal(true)
})
it('Test with  mismatch params array', ()=>{

    let input = [1,'2',2,1]
    let act = isSymmetric(input)
    expect(act).to.be.equal(false)
})

})