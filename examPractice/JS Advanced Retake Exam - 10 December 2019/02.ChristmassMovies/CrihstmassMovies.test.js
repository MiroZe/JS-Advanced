// const ChristmasMovies = require('./02. Christmas Movies_Resources')
// const {expect} = require('chai')

describe("General Test", ()=> {
	
	let test = {};
	beforeEach(()=> test = new ChristmasMovies())
		
	describe('Test initial state', ()=> {

		it('Test initial state of array',()=>{
			expect(test.movieCollection).to.deep.equal([])
			expect(test.movieCollection.length).to.deep.equal(0)
		});
		it('Test initial state of property watched',()=>{
			expect(test.watched).to.deep.equal({})
		});
		it('Test initial state of property actors',()=>{
			expect(test.actors).to.deep.equal([])
			expect(test.actors.length).to.be.equal(0)
		});
	})
	describe('Test method buyMovie', ()=> {
		
		it('Test buyMovie with correct params without exist movie', ()=>{
			
			expect(test.buyMovie('Last Christmas',['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby'])).
			to.be.equal('You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!')
		} );
		it(`throws if movie is already bought`, () => {
			test.buyMovie('a', ['b'])
			expect(()=>test.buyMovie('a', ['b'])).to.throw(`You already own a in your collection!`)
		})


	})
	describe ('Test discardMovie method', ()=> {
		it('Test with watched movie ', ()=>{
			test.buyMovie('a',['b']);
			test.watched.a = 1
			expect(test.discardMovie('a')).to.equal('You just threw away a!')

		})
		it('Test with not bought movie ', ()=>{
			expect(()=>test.discardMovie('a')).to.throw('a is not at your collection!')
		});
		it('Test with not watched movie ', ()=>{
			test.buyMovie('a',['b']);
			expect(()=>test.discardMovie('a')).to.throw('a is not watched!')
		})
	});
	describe ('Test watchMovie method ',()=> {
		it('Test with watched movie',()=> {
			test.buyMovie('a',['b']);
			test.watchMovie('a');
			expect(test.watched.a).to.eq(1)

		});
		it('Test with not bought movie',()=> {
			
			expect(()=>test.watchMovie("a")).to.throw('No such movie in your collection!')

		});
	describe('Test favouriteMovie',()=> {
		it('Test with one movie', ()=> {
			test.watched.a = 1
			test.watched.b = 2
			expect(test.favouriteMovie()).to.
			eq('Your favourite movie is b and you have watched it 2 times!')
		});
		it('Is not watched movies yet',()=>{
			expect(()=>test.favouriteMovie()).to.throw('You have not watched a movie yet this year!')

		});
	describe('Test mostStarredActor ', ()=>{
		it('test with no movie in list',()=>{
			expect(()=> test.mostStarredActor()).to.throw('You have not watched a movie yet this year!')

		});
		it('test with movie with same actor',()=>{
			test.buyMovie('a',['b','c','d']);
			test.buyMovie('b',['f','c','e']);
			test.buyMovie('d',['r','c','e']);
			expect(test.mostStarredActor()).to.eq('The most starred actor is c and starred in 3 movies!')


		})

	})

	})

	});









})


