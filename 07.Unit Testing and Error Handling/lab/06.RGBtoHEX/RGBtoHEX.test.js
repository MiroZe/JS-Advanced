const { expect } = require('chai');
const {rgbToHexColor} = require('./RGBtoHEX');

describe('RGB to HEX' , ()=> {

it('Test1 with white colour parameters ', ()=> {
 
    expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
})

it('Test2 with black colour parameters ', ()=> {
 
    expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF');
})
it('Test3 with unbound parameters ', ()=> {
 
    expect(rgbToHexColor(255,-1,255)).to.be.equal(undefined);
    expect(rgbToHexColor(-1,255,255)).to.be.equal(undefined);
    expect(rgbToHexColor(255,255,-1)).to.be.equal(undefined);
})
it('Test4 with outbound parameters ', ()=> {
 
    expect(rgbToHexColor(0,0,300)).to.be.equal(undefined);
    expect(rgbToHexColor(0,300,0)).to.be.equal(undefined);
    expect(rgbToHexColor(300,0,0)).to.be.equal(undefined);
})
it('Test5 works with string parameters ', ()=> {
 
    expect(rgbToHexColor('1',0,300)).to.be.equal(undefined);
    expect(rgbToHexColor(0,'a',0)).to.be.equal(undefined);
    expect(rgbToHexColor(300,0,'a')).to.be.equal(undefined);
})
it('Test6 works with missing parameters ', ()=> {
 
    expect(rgbToHexColor((0,300))).to.be.equal(undefined);
    expect(rgbToHexColor((0))).to.be.equal(undefined);
    expect(rgbToHexColor()).to.be.equal(undefined);
    
})
it('Test7 works with floats parameters ', ()=> {
 
    expect(rgbToHexColor(1.1,0,0)).to.be.equal(undefined);
    expect(rgbToHexColor(0,1.1,0)).to.be.equal(undefined);
    expect(rgbToHexColor(0,0,1.1)).to.be.equal(undefined);
    
})
it('Test8 works with  parameters given by array ', ()=> {
 
    expect(rgbToHexColor([0,0,0])).to.be.equal(undefined);
    
    
})
})
