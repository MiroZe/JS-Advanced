const { expect } = require("chai");
const rentCar = require("./rentCar");



describe("Tests rentCar", function() {
    describe("Test searchCar method", function() {
        it("Test with correct param ", function() {
           expect(rentCar.searchCar(['a','b','c'],'a')).to.equal('There is 1 car of model a in the catalog!')
        });
        it("Test with 0 param ", function() {
            expect(rentCar.searchCar(['a','b','a'],'a')).to.equal('There is 2 car of model a in the catalog!')
         });
        it("Test with unmatched param ", function() {
            expect(()=>rentCar.searchCar(['a','b','a'],'f')).to.throw('There are no such models in the catalog!')
         });
         it("Test with unmatched param ", function() {
            expect(()=>rentCar.searchCar(['a','b','a'],true)).to.throw('Invalid input!')
         });
         it("Test with unmatched param ", function() {
            expect(()=>rentCar.searchCar('a','a')).to.throw('Invalid input!')
         })
     });
   
     describe('Test calculatePriceOfCar method', ()=> {

        it('Test with invalid input ',()=> {
            expect(()=>rentCar.calculatePriceOfCar(1,1)).to.throw('Invalid input!')
        })
        it('Test with invalid input ',()=> {
            expect(()=>rentCar.calculatePriceOfCar('1','1')).to.throw('Invalid input!')
        })
        it('Test with valid input ',()=> {
 
    
            expect(rentCar.calculatePriceOfCar('Volkswagen',1)).to.equal(`You choose Volkswagen and it will cost $20!`)
        })
        it('Test with valid input ',()=> {
          
            expect(rentCar.calculatePriceOfCar('Audi',10)).to.equal(`You choose Audi and it will cost $360!`)
        })
        it('Test with not existing model input ',()=> {
          
            expect(()=>rentCar.calculatePriceOfCar('Lada',10)).to.throw()
        })
     })
     describe('Test checkBudget method',()=> {

        it('Test with string as cost per Day',()=>{
            expect(()=>rentCar.checkBudget('1',1,1)).to.throw('Invalid input!')

        })
        it('Test with string as days',()=>{
            expect(()=>rentCar.checkBudget(1,'1',1)).to.throw('Invalid input!')

        })
        it('Test with string as budget',()=>{
            expect(()=>rentCar.checkBudget(1,1,'1')).to.throw('Invalid input!')

        })
        it('Test with  budget is enough',()=>{
            expect(rentCar.checkBudget(1,1,1)).to.equal('You rent a car!')

        })
        it('Test with  budget is not enough',()=>{
            expect(rentCar.checkBudget(2,1,1)).to.equal('You need a bigger budget!')

        })
        it('Test with  budget is bigger',()=>{
            expect(rentCar.checkBudget(1,1,3)).to.equal('You rent a car!')

        })
      

     })
});
