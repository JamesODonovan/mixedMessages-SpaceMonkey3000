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
  //console.log(`GenItemsIteratively Input Array -> ${array}`)
  const itemObjectArray = [];
  for (item of array) {
    //console.log(item)
    itemObject = genItemFromArray(item);
    //console.log(itemObject);
    itemObjectArray.push(itemObject);
  }
  //console.log(`GenItemsIteratively -> Export ${itemObjectArray}`);
  return itemObjectArray;

}

const items = genItemsIteratively(itemInfo);

const randomLocation = locationPhrases[Math.floor(Math.random() * locationPhrases.length)];
const randomScenario = scenarioPhrases[Math.floor(Math.random() * scenarioPhrases.length)];

//console.log(randomLocation);
//console.log(randomScenario);

const rollItemRng = (rarityValue) => {
  const randomValue = Math.random();
  if (randomValue <= rarityValue) {
    return true;
  }
  else {
    return false;
  }
}

const getCurrentItems = (array) => {
  const currentItems = [];

  for (item of array) {
    const hasItem = rollItemRng(item.rarity);
    if (hasItem === true) {
      currentItems.push(item)
    }
  }
  //console.log(`getCurrentItems Export -> ${currentItems}`)
  return currentItems;
}

const sortItemsByType = itemArray => {
  const weapons = [];
  const largeItems = [];
  const smallItems = [];

  for (item of itemArray) {
    if (item.type === 'Weapon') {
      weapons.push(item);
    }
    if (item.type === "Large Item") {
      largeItems.push(item);
    }
    if (item.type === "Small Item") {
      smallItems.push(item)
    }
  }
  sortedArray = [weapons, largeItems, smallItems]

  //console.log(`sortItemsByType Export -> ${sortedArray}`)
  return sortedArray;
}

const formatItemListString = (array) => {
  formattedList = '';
  //console.log(array);
  for (let i = 0; i < array.length; i++) {
    const currentItemName = array[i].name;
  //  console.log(i)

    if (i !== (array.length-1)) {
      formattedList += (currentItemName + ", ")
      //console.log(currentItemName);
    }
    else {
      if (array.length === 1){
        formattedList += (currentItemName + '.')
      }
      else {
        formattedList += ('and a ' + currentItemName +".");
      }
    }
  }
  return formattedList;
}

const getItemPhrases = (itemsArray) => {
  //console.log(itemsArray);
  const weapons = itemsArray[0];
  const largeItems = itemsArray[1];
  const smallItems = itemsArray[2];
  //console.log(`Weapons array: ${weapons}`);
  //console.log(weapons === undefined)
  //console.log(largeItems);
  //console.log(smallItems);

  let weaponsPhrase = "You are armed with a ";
  if (weapons.length > 0) {
    weaponsPhrase += formatItemListString(weapons);
  }
  else {
    weaponsPhrase = "You have no weapons."
  }

  let largeItemsPhrase = "In your backpack you have a ";
  if (largeItems.length > 0)  {
    largeItemsPhrase += formatItemListString(largeItems)
  }
  else {
    largeItemsPhrase = "You backpack is empty.";
  }

  let smallItemsPhrase = "In your pocket you have a ";
  if (smallItems > 0){
    smallItemsPhrase += formatItemListString(smallItems);
  }

  else {
    smallItemsPhrase = "Your pockets are empty."
  }

  const itemsPhrase = weaponsPhrase + ' ' + largeItemsPhrase + ' ' + smallItemsPhrase;
  return itemsPhrase;
}

const runApplication = () => {
  const playerItems = getCurrentItems(genItemsIteratively(itemInfo));
  const sortedPlayerItems = sortItemsByType(playerItems);
  const itemPhrases = getItemPhrases(sortedPlayerItems)

  return itemPhrases;
}



console.log(runApplication());
//console.log(playerItems)
//console.log(sortedPlayerItems);
//console.log(itemPhrases);
const printStory = () => {

}
