//Message Generator
const itemInfo = [['Lazer Gun','Weapon', 0.1 ], ['Ray Gun', 'Weapon', 0.1], ['Light Sword', 'Weapon', 0.05], ['Sharpened Spoon', 'Weapon', 0.6], ['Pointy Stick', 'Weapon', 0.7], ['Enemy Detection Unit', 'Large Item', 0.4], ['Rocket Backpack', 'Large Item', 0.1], ['Universal Translator', 'Large Item', 0.3], ['Teddy Bear Nanny Cam', 'Large Item', 0.4], ['Space Suit', 'Large Item', 0.3], ['Toothbrush', 'Small Item', 0.4], ['Quantum Radio', 'Small Item', 0.1], ['Brick', 'Small Item', 0.4], ['Car Keys', 'Small Item', 0.2], ['Wallet', 'Small Item', 0.5]];

const getRandomCard = () => {
  const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const randValue = values[Math.floor(Math.random() * values.length)];
  const randSuit = suits[Math.floor(Math.random() * suits.length)];
  return `${randValue} of ${randSuit}`;
}
const getRandomPairOfCards = () => {
  cards = []
  cards[0] = getRandomCard();
  do {
    cards[1] = getRandomCard();
  } while (cards[0] === cards[1]);
  return cards;
}
const playerCards = getRandomPairOfCards();

const locationPhrases = [['You find yourself in the cargo bay of a mid sized spacecraft. Out the small viewing bay you see your home planet start to drift into the distance.'], ['Great structures jut out of the ground, strange artifacts float through the planets sky.'], ["In one of the most secure prison wards in this galaxy's quadrant..."], ['lively music plays in the background, drowned out by the patrons chattering over it, as you sip on your cool drink...'], ['Deep within the cave systems of one of the outer planets...']];
const scenarioPhrases = [["You futilely attempt to force your way out of the cell. Blue sparks scatter through the air as you pull your hand back, leaving a numbing sting in your fingertips. The guard in the distance didn't seem to notice however..."], ["Indigo smoke swirls around the feet of a dark robed figure standing in front a shimmering table etched with archaic runes. As you are dragged towards the apparition you see that it is brandishing a twisted knife with a black blade and gold jeweled hilt."], ["In front of you, caged, a blue and green alien with long tentacle appendages cries out to you in a language you cannot understand."], [`Sitting around a table, you look around at your fellow players, lifting up just the tips of the cards you see you have a ${playerCards[0]} and a ${playerCards[1]}, the air feels tense.`], ['Ushered into a small doorway hidden out of plain view, you walk down a cold metal hallway into the back room. Greeted by a large slug alien, he directs you to the table of wares in front of him.']];

const weaponsPhrase = "You are armed with ";
const largeItemsPhrase = "In your backpack you have ";
const smallItemsPhrase = "In your pocket you have ";


const genItem = (name, rarity, type) => {
  obj = {
    name: name,
    type: type,
    rarity: rarity
  };
  return obj;
}

const genItemFromArray = itemStat => {
  const name = itemStat[0];
  const type = itemStat[1];
  const rarity = itemStat[2];
  const itemObj = genItem(name, rarity, type);
  return itemObj;
}

const genItemsIteratively = array => {
  const itemObjectArray = [];
  for (item of array) {
    itemObjectArray.push(genItemFromArray(item))
  }
  return itemObjectArray;
}

const items = genItemsIteratively(itemInfo);

const randomLocation = locationPhrases[Math.floor(Math.random() * locationPhrases.length)];
const randomScenario = scenarioPhrases[Math.floor(Math.random() * scenarioPhrases.length)];

console.log(randomLocation);
console.log(randomScenario);

const rollItemRng = (rarityValue) => {
  const randomValue = Math.random();
  if (randomValue <= rarityValue) {
    return true;
  }
  else {
    return false;
  }
}

const getCurrentItems = () => {
  const currentItems = [];

  for (item of items) {
    const hasItem = rollItemRng(item.rarity);
    if (hasItem === True) {
      currentItems.push(item)
    }
  }
  return currentItems;
}

console.log(getCurrentItems())
