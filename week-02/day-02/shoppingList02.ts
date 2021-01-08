'use strict';

let prices = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.6,
  ChickenBreasts: 9.4,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.1,
};

let BobList = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  ChickenBreasts: 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
};

let AliceList = {
  Rice: 1,
  Eggs: 5,
  ChickenBreasts: 2,
  Apples: 1,
  Tomato: 10,
};

let bobAmount: number = 0;
Object.keys(prices).forEach((key) => {
  if (BobList.hasOwnProperty(key)) {
    bobAmount += prices[key] * BobList[key];
  }
});
console.log(bobAmount);

let AliceAmount: number = 0;
Object.keys(prices).forEach((key) => {
  if (AliceList.hasOwnProperty(key)) {
    AliceAmount += prices[key] * AliceList[key];
  }
});
console.log(AliceAmount);

function moreRice() {
  if (AliceList.Rice > BobList.Rice) {
    console.log(`Alice buy more rice`);
  } else console.log(`Bob buy more rice`);
}
moreRice();

function morePotato() {
  if (!AliceList.hasOwnProperty('Potato')) {
    console.log(`Bob buy more potato`);
  }
}
morePotato();

function moreProduct() {
  if (Object.keys(AliceList).length > Object.keys(BobList).length) {
    console.log(`Alice buy more product`);
  } else console.log(`Bob buy more product`);
}
moreProduct();

let alicePieces: number = 0;
Object.keys(AliceList).forEach((key) => {
  alicePieces += AliceList[key];
  return alicePieces;
});

let bobPieces: number = 0;
Object.keys(BobList).forEach((key) => {
  bobPieces += BobList[key];
  return bobPieces;
});

function morePiece() {
  if (alicePieces > bobPieces) {
    console.log(`Alice buy more piece`);
  } else console.log(`Bob buy more piece`);
}
morePiece();
console.log(alicePieces);
console.log(bobPieces);
