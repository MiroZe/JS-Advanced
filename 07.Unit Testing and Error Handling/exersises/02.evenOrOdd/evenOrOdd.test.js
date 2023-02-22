
const { expect } = require('chai')
const {isOddOrEven} = require('./evenOrOdd')

describe( 'Test', ()=> {

it('Test 1 chek if type of argument is string', () =>{

    expect(typeof(isOddOrEven('aaaa'))).to.be.equal('string')
})
it('Test 2 chek if type of argument is array', () =>{

    expect(typeof(isOddOrEven(['a','a','a']))).to.be.equal('undefined')
})
it('Test 3 chek if type of argument is number', () =>{

    expect(typeof(isOddOrEven(111111))).to.be.equal('undefined')
})
it('Test 4 chek if string length is even', () =>{

    expect(isOddOrEven('aaaa')).to.be.equal('even')
})
it('Test 5 chek if string length is odd', () =>{

    expect(isOddOrEven('aaa')).to.be.equal('odd')
})
it('Test 6 chek if argument is empty string', () =>{

    expect(isOddOrEven('')).to.be.equal('even')
})
it('Test 7 chek if argument is big even string', () =>{
    let string = 'a'.repeat(10000)
    expect(isOddOrEven(string)).to.be.equal('even')
})
it('Test 8 chek if argument is big odd string', () =>{
    let string = 'a'.repeat(10001)
    expect(isOddOrEven(string)).to.be.equal('odd')
})
it('Test 9 chek if argument with concatenated string', () =>{
    let string = 'aaaaaaaaaa' + 'aaaaaaaaa'
    expect(isOddOrEven(string)).to.be.equal('odd')
})
})