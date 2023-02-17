const { expect } = require('chai');
const {createCalculator} = require('./addSubtract');


describe('Test Calculator', ()=> {
    let test = createCalculator()
it('Test1 is returned is object', () => {
    let returntype = 'object'
    expect(typeof createCalculator()).to.be.equal('object')
})
it('Test2 are returned methods', () => {
    
    expect(typeof test.add).to.be.equal('function')
    expect(typeof test.subtract).to.be.equal('function')
    expect(typeof test.get).to.be.equal('function')
})
it('Test3 check add with number as string', () => {
    let test = createCalculator()
    test.add('1')
    expect(test.get()).to.be.equal(1)
 
})
it('Test4 check subtract with number as string', () => {
    let test = createCalculator()
    test.add(2)
    test.subtract('1')
    expect(test.get()).to.be.equal(1)
 
})
it('Test5 check that internal value cant be modified', () => {
    let test = createCalculator()
    
    expect(test.value).to.be.equal(undefined)
 
})
it('Test6 check that internal value return coorect sum', () => {
    let test = createCalculator();
    test.add(2)
    test.subtract(1)
    
    expect(test.get()).to.be.equal(1)
 
})

})