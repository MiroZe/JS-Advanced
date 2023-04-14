class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture":200,"photo":50,"item":250};
        this.listOfArticles = [];
        this.guests =  [];
    }

addArticle( articleModel, articleName, quantity ) {
    articleModel = articleModel.toLowerCase()
    if(!this.possibleArticles[articleModel]){
        throw new Error('This article model is not included in this gallery!')
    }
    let isFound = this.listOfArticles.find(el => el.articleName === articleName)
    if(!isFound){
        let temp = {
            articleModel,
            articleName,
            quantity
        }
        this.listOfArticles.push(temp)
    } else {
        isFound.quantity += quantity
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
}
inviteGuest ( guestName, personality) {
    let newGuest = {}
    let isFound = this.guests.find(el => el.guestName === guestName)
    if(isFound) {
        throw new Error (`${guestName} has already been invited.`)
    } else {
        let points = 50;
        if(personality == 'Vip') {
            points = 500;
        } else if(personality == 'Middle') {
            points = 250
        }
         newGuest = {
            guestName,
            points,
            purchaseArticle:0}
        }   
        this.guests.push(newGuest)
        return `You have successfully invited ${guestName}!`
    }
    buyArticle ( articleModel, articleName, guestName) {
        let isFound = this.listOfArticles.find(el => el.articleName === articleName && el.articleModel === articleModel )
        if(!isFound) {
            throw new Error('This article is not found.')
        }
        if(isFound.quantity === 0) {
            return `The ${articleName} is not available.`
        }
        let foundGuest = this.guests.find(el => el.guestName === guestName)
        if(!foundGuest) {
            return 'This guest is not invited.'
        }
        if(foundGuest.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`
        } else {
            foundGuest.points -= this.possibleArticles[articleModel];
            isFound.quantity --;
            foundGuest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }
    }
    showGalleryInfo (criteria) {
        let output = []
        if(criteria === 'article') {
            output.push('Articles information:')
            this.listOfArticles.forEach(article => output.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`))

        } else if(criteria === 'guest') {
            output.push('Guests information:')
            this.guests.forEach(guest => output.push(`${guest.guestName} - ${guest.purchaseArticle}`))
        }

        return output.join('\n')
    }
    

}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


