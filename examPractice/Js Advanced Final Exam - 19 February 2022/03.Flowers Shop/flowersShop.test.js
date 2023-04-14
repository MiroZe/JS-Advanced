const flowerShop = require('./flowerShop');
const {expect} = require('chai')


describe("Tests", function() {
    let test = {};
    beforeEach(()=> test = flowerShop)
    describe("Main test object", function() {
        it("Test is test object", function() {
            expect(typeof test).to.equal('object')
        });
     });
    describe('Test calcPriceOfFlowers method', ()=> {
        it('Test with invalid flower name', ()=> {
            expect(()=>test.calcPriceOfFlowers(1,1,1)).to.throw('Invalid input!')
        });
        it('Test with invalid price ', ()=> {
            expect(()=>test.calcPriceOfFlowers('a','1',1)).to.throw('Invalid input!')
        });
        it('Test with invalid quantity ', ()=> {
            expect(()=>test.calcPriceOfFlowers('a',1,"1")).to.throw('Invalid input!')
        });
        it('Test with valid parameters ', ()=> {
            expect(test.calcPriceOfFlowers('a',10,10)).to.equal('You need $100.00 to buy a!')
        });
    })
    describe('Test checkFlowersAvailable method', ()=> {
        it('Test with exist flower',()=> {
            expect(test.checkFlowersAvailable('rose',['rose'])).to.equal('The rose are available!')
        });
        it('Test with not exist flower',()=> {
            expect(test.checkFlowersAvailable('rose',['lilium'])).to.equal('The rose are sold! You need to purchase more!')
        });


    }) ;
    describe('Test sellFlowers method',()=> {
        it ('Test with exist flower',()=>{
            expect(test.sellFlowers(['rose','lilum','orchid'],1)).to.equal('rose / orchid')
        });
        it ('Test with nevalid index',()=>{
            expect(()=>test.sellFlowers(['rose','lilum','orchid'],15)).to.throw('Invalid input!')
        });
        it ('Test with negative index',()=>{
            expect(()=>test.sellFlowers(['rose','lilum','orchid'],-1)).to.throw('Invalid input!')
        });
        it ('Test with not array given',()=>{
            expect(()=>test.sellFlowers({},1)).to.throw('Invalid input!')
        });
        it ('Test with index as string',()=>{
            expect(()=>test.sellFlowers(['rose','lilum','orchid'],'2')).to.throw('Invalid input!')
        });
    })
});
