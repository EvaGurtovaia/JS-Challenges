const myDeck = {
    deck: [],
    drawnCard: [],
    values: "2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A",
    suits: ["clubs", "spades", "hearts", "diamonds"],
    initializeDeck() {
        const { deck, values, suits } = this;
        for (let value of values.split(",")) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit,
                });
            }
        }
        return deck;
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCard.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
};
