//Message Generator
const itemInfo = [['Lazer Gun','Weapon', 0.1 ], ['Ray Gun', 'Weapon', 0.1], ['Light Sword', 'Weapon', 0.05], ['Sharpened Spoon', 'Weapon', 0.6], ['Pointy Stick', 'Weapon', 0.7], ['Combatant Detection Unit', 'Large Item', 0.4], ['Rocket Backpack', 'Large Item', 0.1], ['Universal Translator', 'Large Item', 0.3], ['Teddy Bear Nanny Cam', 'Large Item', 0.4], ['Space Suit', 'Large Item', 0.3], ['Toothbrush', 'Small Item', 0.4], ['Quantum Radio', 'Small Item', 0.1], ['Brick', 'Small Item', 0.4], ['Set of Keys', 'Small Item', 0.2], ['Wallet', 'Small Item', 0.5]];

const itemFactory = (name, rarity, type) => {
  obj = {
    name: name,
    type: type,
    rarity: rarity
  };
  return obj;
}

const itemArrayToObject = itemStat => {
  const name = itemStat[0];
  const type = itemStat[1];
  const rarity = itemStat[2];
  const itemObj = itemFactory(name, rarity, type);
  return itemObj;
}

const iteratateItemFactory = array => {
  //console.log(`iteratateItemFactory Input Array -> ${array}`)
  const itemObjectArray = [];
  for (item of array) {
    //console.log(item)
    itemObject = itemArrayToObject(item);
    //console.log(itemObject);
    itemObjectArray.push(itemObject);
  }
  //console.log(`iteratateItemFactory -> Export ${itemObjectArray}`);
  return itemObjectArray;

}

const rollItemChance = rarityValue => {
  const randomValue = Math.random();
  if (randomValue <= rarityValue) {
    return true;
  }
  else {
    return false;
  }
}

const getCurrentItems = allItems => {
  const currentItems = [];

  for (item of allItems) {
    const hasItem = rollItemChance(item.rarity);
    if (hasItem === true) {
      currentItems.push(item)
    }
  }
  //console.log(`getCurrentItems Export -> ${currentItems}`)
  return currentItems;
}

const sortItemsByType = currentItems => {
  const weapons = [];
  const largeItems = [];
  const smallItems = [];

  for (item of currentItems) {
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
  const sortedItems = [weapons, largeItems, smallItems]

  console.log(`sortItemsByType Export -> ${sortedItems}`)
  return sortedItems;
}

const formattedItemListToString = itemsArray => {
  formattedItemString = '';
  //console.log(itemsArray);
  for (let i = 0; i < itemsArray.length; i++) {
    const currentItemName = itemsArray[i].name;
  //  console.log(i)

    if (i !== (itemsArray.length-1)) {
      formattedItemString += (currentItemName + ", ")
      //console.log(currentItemName);
    }
    else {
      if (itemsArray.length === 1){
        formattedItemString += (currentItemName + '.')
      }
      else {
        formattedItemString += ('and a ' + currentItemName +".");
      }
    }
  }
  return formattedItemString;
}

const genItemPhrase = currentItems => {
  //console.log(currentItems);
  const weapons = currentItems[0];
  const largeItems = currentItems[1];
  const smallItems = currentItems[2];
  //console.log(`Weapons array: ${weapons}`);
  //console.log(weapons === undefined)
  //console.log(largeItems);
  console.log(smallItems);
  console.log(smallItems.length)

  let weaponsPhrase = "You are armed with a ";
  if (weapons.length > 0) {
    weaponsPhrase += formattedItemListToString(weapons);
  }
  else {
    weaponsPhrase = "You have no weapons."
  }

  let largeItemsPhrase = "In your backpack you have a ";
  if (largeItems.length > 0)  {
    largeItemsPhrase += formattedItemListToString(largeItems)
  }
  else {
    largeItemsPhrase = "Your backpack is empty.";
  }

  let smallItemsPhrase = "In your pocket you have a ";
  if (smallItems.length > 0){
    smallItemsPhrase += formattedItemListToString(smallItems);
  }

  else {
    smallItemsPhrase = "Your pockets are empty."
  }

  const itemsPhrase = weaponsPhrase + ' ' + largeItemsPhrase + ' ' + smallItemsPhrase;
  return itemsPhrase;
}


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

const locationPhrases = ['You find yourself in the cargo bay of a mid sized spacecraft. Out the small viewing bay, on the opposing wall, you see your home planet start to drift into the distance.', 'Great structures jut out of the ground, strange artifacts float through the planets sky.', "In one of the most secure prison wards in this galaxy's quadrant...", 'Drowned out by the patrons chattering over it, lively music faintly plays in the background,  as you sip on a cool drink...', 'Deep within the cave systems of one of the outer planets...'];
const scenarioPhrases = ["You futilely attempt to force your way out of the cell. Blue sparks scatter through the air as you pull your hand back, leaving a numbing sting in your fingertips. The guard in the distance didn't seem to notice however...", "Indigo smoke swirls around the feet of a dark robed figure standing in front a shimmering table etched with archaic runes. As you are dragged towards the apparition you see that it is brandishing a twisted knife with a black blade and gold jeweled hilt.", "In front of you, caged, a blue and green alien with long tentacle appendages cries out to you in a language you cannot understand.", `Sitting around a table, you look around at your fellow players, lifting up just the tips of the cards you see you have a ${playerCards[0]} and a ${playerCards[1]}, the air feels tense.`, 'Ushered into a small doorway hidden out of plain view, you walk down a cold metal hallway into a dimly lit back room. Greeted by a large slug alien, he directs you to the table of wares in front of him.'];

const randomLocation = locationPhrases[Math.floor(Math.random() * locationPhrases.length)];
const randomScenario = scenarioPhrases[Math.floor(Math.random() * scenarioPhrases.length)];

const randomPhrase = (stringArray) => {
  return stringArray[(Math.floor(Math.random() * stringArray.length))]
}


const runScript= () => {
  const randomLocationString = randomPhrase(locationPhrases);
  const randomScenarioString = randomPhrase(scenarioPhrases);

  const playerItems = getCurrentItems(iteratateItemFactory(itemInfo));
  const sortedPlayerItems = sortItemsByType(playerItems);
  const itemPhrases = genItemPhrase(sortedPlayerItems);


  const fullMessage = randomLocationString + " " + randomScenarioString + " " + itemPhrases;
  console.log(fullMessage);
}

runScript();
