'use strict';

let dataBase = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

let mostExpensive: number = 0;

Object.keys(dataBase).forEach((key) => {
  if (dataBase[key] > mostExpensive) {
    mostExpensive = dataBase[key];
  }
  return mostExpensive;
});
console.log(mostExpensive);

Object.keys(dataBase).forEach((key) => {
  if (
    dataBase[key] == Object.values(dataBase).reduce((a, b) => Math.max(a, b))
  ) {
    console.log(`Most expensive is ${dataBase[key]}, ${key}`);
  }
});

let summ: number = 0;
Object.keys(dataBase).forEach((key) => {
  summ += dataBase[key];
  return summ;
});
/*
function sumM() {
  for (let price of Object.values(dataBase)) {
    summ += price;
  }
  return summ;
}
*/
console.log(summ / Object.values(dataBase).length);

Object.keys(dataBase).forEach((key) => {
  if (dataBase[key] < 300) {
    console.log(`${dataBase[key]}, ${key}`);
  }
});

let seekValue: number = 200;
for (let key in dataBase) {
  if (dataBase[key] == seekValue) {
    console.log(`${dataBase[key]}, ${key}`);
  }
}

for (let price of Object.values(dataBase)) {
  //console.log(price);
}

console.log(Object.values(dataBase).reduce((a, b) => Math.min(a, b)));

let minPrice: number = 1000000000;
for (let key in dataBase) {
  if (dataBase[key] < minPrice) {
    minPrice = dataBase[key];
  }
}

let minP: number = 500000;
Object.keys(dataBase).forEach((key) => {
  if (dataBase[key] < minP) {
    minP = dataBase[key];
    return minP;
  }
});

Object.keys(dataBase).forEach((key) => {
  if (
    dataBase[key] == Object.values(dataBase).reduce((a, b) => Math.min(a, b))
  ) {
    console.log(`${dataBase[key]}, ${key}`);
  }
});

/*
let doublePrice = Object.fromEntries(
  Object.entries(dataBase).map(([key, value]) => [key, value * 2])
);
*/
