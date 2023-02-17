function deckOfCards(arrOfCards) {
    let result = []

    for ( singleCard of arrOfCards) {
        let suit = singleCard.slice(-1);
        let face = singleCard.slice(0,singleCard.length-1);
        let card;
        try {
            card = createCard(face,suit);
            result.push(card);
            
        } catch (err){
            result = [`Invalid card: ${face}${suit}`]
        }
    }
    
    console.log(result.join(' '));


    function createCard(face, suit) {
        let faces = [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
          "A",
        ];
        let suits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
      
        if (faces.indexOf(face) === -1) {
          throw new Error(`Invalid card: ${face}${suit} `);
        }
        if (!suits[suit]) {
            throw new Error(`Invalid card: ${face}${suit} `);
        }
      
        let result = {
          face,
          suit: suits[suit],
          toString() {
            return this.face + this.suit;
          },
        };
        return result;
      }


}
deckOfCards(['AS', '10D', 'KH', '3H']);
deckOfCards(['12S', '3D', 'QD', '5X']);
