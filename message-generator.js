//Message Generator
const weaponInfo = [['Lazer Gun','Weapon', 0.1 ], ['Ray Gun', 'Weapon', 0.1], ['Light Sword', 'Weapon', 0.05], ['Sharpened Spoon', 'Weapon', 0.6], ['Pointy Stick', 'Weapon', 0.7]];
const largeItemInfo = [['Enemy Detection Unit', 'Large Item', 0.4], ['Rocket Backpack', 'Large Item', 0.1], ['Universal Translator', 'Large Item', 0.3], ['Teddy Bear Nanny Cam', 'Large Item', 0.4], ['Space Suit', 'Large Item', 0.3]];
const smallItemInfo = [['Toothbrush', 'Small Item', 0.4], ['Quantum Radio', 'Small Item', 0.1], ['Brick', 'Small Item', 0.4], ['Car Keys', 'Small Item', 0.2], ['Wallet', 'Small Item', 0.5]]
console.log(typeof([]))

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

let weaponObjects = [];

for (weapon of weaponInfo) {
  weaponObjects.push(genItemFromArray(weapon));
}

console.log(weaponObjects);
