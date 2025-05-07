const SUITS = ["Hearts", "Spades", "Diamonds", "Clubs"];
const CARD_NAMES = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
const MAX_RANDOM_CARDS = 10000;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class Card {
  constructor(suit, name) {
    this.suit = suit;
    this.name = name;
  }

  getSuit() {
    return this.suit;
  }

  getName() {
    return this.name;
  }
}

function generateRandomCard() {
  const suitIndex = getRandomInt(SUITS.length);
  const nameIndex = getRandomInt(CARD_NAMES.length);
  return new Card(SUITS[suitIndex], CARD_NAMES[nameIndex]);
}

function getMinimumCardCount(cardMap) {
  let minCount = Number.MAX_SAFE_INTEGER;
  cardMap.forEach((count) => {
    if (count < minCount) {
      minCount = count;
    }
  });
  return minCount;
}

function countCompleteDecks(cards) {
  const cardFrequencyMap = new Map();

  for (const card of cards) {
    const key = `${card.getSuit()}-${card.getName()}`;
    const count = cardFrequencyMap.get(key) ?? 0;
    cardFrequencyMap.set(key, count + 1);
  }

  if (cardFrequencyMap.size < 52) {
    return 0;
  }

  return getMinimumCardCount(cardFrequencyMap);
}
const counter_cars= new Map();
let counter_desk = 0;
function addCard(card){
    const key = `${card.getSuit()}-${card.getName()}`;
    const counter = counter_cars.get(key)?? 0;
    counter_cars.set(key, counter + 1);
    if(counter_cars.size < 52){
        return counter_desk;
    }
    for(const key of counter_cars.values()){
        if(key <= counter_desk){
            return counter_desk;
        }
    }
    counter_desk++;
    return counter_desk;
}
function simulateDecksFromRandomCards() {
  const numberOfCards = getRandomInt(MAX_RANDOM_CARDS);
  const cards = [];

  for (let i = 0; i < numberOfCards; i++) {
    const random_card = generateRandomCard();
    const desks = addCard(random_card);
    console.log("Added card: " + random_card.getSuit() +"-" + random_card.getName() +  "desks fulled : " + desks);
    cards.push(random_card);
  }

  return countCompleteDecks(cards);
}

const completeDecks = simulateDecksFromRandomCards();
console.log("The number of cards counter is: "+ completeDecks);