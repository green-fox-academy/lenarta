'use strict';

let dataBase2 = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

let targetPrice: number = 201;

Object.keys(dataBase2).forEach((key) => {
  if (dataBase2[key] < targetPrice) {
    console.log(`${key}`);
  }
});

let targetPrice2: number = 150;

Object.keys(dataBase2).forEach((key) => {
  if (dataBase2[key] > targetPrice) {
    console.log(`${key}, ${dataBase2[key]}`);
  }
});
