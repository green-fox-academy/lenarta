let candyNumber = 99;
let candies = document.querySelector('.candies');
let lollypopsNumber = 9;
let lollypops = document.querySelector('.lollypops');

addCandy = (number) => {
  candyNumber += number;
  candies.innerText = `${candyNumber}`;
  console.log(candyNumber);
};

let createButton = document.querySelector('.create-candies');
createButton.addEventListener('click', () => {
  addCandy(1);
});

let buyButton = document.querySelector('.buy-lollypops');
buyButton.addEventListener('click', () => {
  if (candyNumber >= 100) {
    candyNumber -= 100;
    lollypopsNumber++;
    lollypops.innerText += `🍭`;
    console.log(lollypopsNumber);
  }
});


let machineButton = document.querySelector('.candy-machine');
let speed = 1000;
let interval = setInterval(() => {}, speed);

machineButton.addEventListener('click', () => {
  clearTimeout(interval);
  speed /= 10;
  setInterval(() => {
    let multi = Math.floor(lollypopsNumber / 10);
    if (lollypopsNumber >= 10) {
      addCandy(multi);
      console.log(speed);
    }
  }, speed);
});

let speedCount = document.querySelector('.speed')

setInterval(() => {
  let multi = Math.floor(lollypopsNumber / 10);
  if (lollypopsNumber >= 10) {
    addCandy(multi);
    speedCount.innerText = multi * (1000/speed)
    console.log(speed);
  }
}, speed);


