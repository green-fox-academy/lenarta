// console.log(window);
// console.log(document);
// console.log(window.location.href);

const mainElement = document.getElementById('main');
const htmlList = document.getElementsByClassName('list');

// console.log(mainElement);
// console.log(htmlList);

// console.log(htmlList[0].children[0].children[0]);

// console.log(document.getElementsByTagName('li'));

// console.log(document.querySelector('#main'));

// console.log(document.querySelector('.list'));

/*
console.log('--------HTML Collection elemek----------');
// Ez nincs!
// htmlList.forEach(elem => {
  //   console.log(elem);
  // });
  
  for (let i = 0; i < htmlList.length; i++) {
    console.log(htmlList[i]);
  }
  */

const nodeList = document.querySelectorAll('.list');
console.log(nodeList);

console.log('--------Node Lista elemek----------');
nodeList.forEach((elem) => {
  console.log(elem);
});

const parag5 = document.createElement('p');
mainElement.appendChild(parag5);

parag5.innerText = '<strong>P 5</strong>';

const parag4 = document.createElement('p');
mainElement.appendChild(parag4);

parag4.innerHTML = '<strong>P 4</strong>';

// mozgatas egy masik elemhez
nodeList[0].appendChild(parag5);

// elem torlese
//parag5 = document.querySelector('body');
parag5.remove();

mainElement.appendChild(parag5);

const link = document.createElement('a');
link.innerText = 'Click me';
link.setAttribute('href', 'http://google.com');

mainElement.appendChild(link);

console.log(link.getAttribute('href'));

// classok hozzaadasa
link.setAttribute('class', 'linkToGoogle');

mainElement.className = 'mainDiv';
mainElement.className += ' test';

mainElement.classList.add('kiscica');

mainElement.classList.remove('test');

console.log(mainElement.className);
console.log(mainElement.classList);

const h1 = document.querySelector('h1');
h1.style.color = 'blue';

h1.setAttribute('style', 'color: red;');