const { expect } = require('chai')
const {lookupChar} = require('./charLookUp')



describe('Test', ()=>{

    it('Tes1 with not string first parameter ', ()=>{
        expect(lookupChar(1,0)).to.be.equal(undefined)
        expect(lookupChar(['aaa'],1)).to.be.equal(undefined)
        expect(lookupChar(true,1)).to.be.equal(undefined)
    });
    it('Tes2 with not number index ', ()=>{ 
        expect(lookupChar('Levski','a')).to.be.equal(undefined)
    });
    it('Tes3 with not number index which can be parsed', ()=>{ 
        expect(lookupChar('Levski','1')).to.be.equal(undefined)
    });
    it('Tes4 if the index is bigger or equal than string length', ()=>{ 
        expect(lookupChar('Levski',33)).to.be.equal('Incorrect index')
        expect(lookupChar('Levski',6)).to.be.equal('Incorrect index')
    });
    it('Tes5 if the index is negative  ', ()=>{ 
        expect(lookupChar('Levski',-1)).to.be.equal('Incorrect index')
        
       
    });
    it('Tes6 if all parameters are correct ', ()=>{ 
        expect(lookupChar('Levski',0)).to.be.equal('L')
        expect(lookupChar('Levski',5)).to.be.equal('i')
       
    });
    it('Tes7 if parameters are in array ', ()=>{ 
        expect(lookupChar(['aaa',1])).to.be.equal(undefined)
       
    });
    it('Tes8 if string is empty string ', ()=>{ 
        expect(lookupChar('',0)).to.be.equal('Incorrect index')
       
    });
    it('Test9 if index is floating number ', ()=>{ 
        expect(lookupChar('Levski',1.1)).to.be.equal(undefined)
       
    });
    it('Test10 if both parameters are incorrect ', ()=>{ 
        expect(lookupChar(1111,'2')).to.be.equal(undefined)
       
    });


})