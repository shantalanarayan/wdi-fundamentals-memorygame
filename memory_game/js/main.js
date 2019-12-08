

const cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	var card = cards[cardId];
	console.log("User flipped " + card);
	cardsInPlay.push(card);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);