'use strict';

const pictures = [
  { title: '', path: 'assets/pic01.jpg' },
  { title: '', path: 'assets/pic02.jpg' },
  { title: 'Nebula', path: 'assets/pic03.jpg' },
  { title: 'Pillars', path: 'assets/pic04.jpg' },
  { title: '', path: 'assets/pic05.jpg' },
  { title: '', path: 'assets/pic06.jpg' },
  { title: '', path: 'assets/pic07.jpg' },
  { title: '', path: 'assets/pic08.jpg' },
];

const mainPic = document.querySelector('img');

const picturebox = document.querySelector('.picturebox');
let currentPic = 0;

picturebox.setAttribute(
  'style',
  `background-image: url("${pictures[currentPic].path}");`
);

let thumbNailList = document.querySelector('.thumbnails');

console.log(thumbNailList);

for (let i = 0; i < pictures.length; i++) {
  let newPic = document.createElement('li');
  newPic.classList.add('pic');
  newPic.id = `pic0${i + 1}`;
  thumbNailList.appendChild(newPic);
  newPic.setAttribute('style', `background-image: url("${pictures[i].path}");`);
}

let activeThumbnailList = document.querySelectorAll('li');
const title = document.querySelector('h1');

const rightButton = document.getElementById('right');
rightButton.onclick = () => {

  
  picturebox.setAttribute(
    'style',
    `background-image: url("${pictures[currentPic + 1].path}");`
  );
  let counter = currentPic + 1;
  counter++;
  currentPic++;
  console.log(counter, currentPic);

  
  activeThumbnailList.forEach((element) => {
    element.classList.remove('active');
  });
  
  activeThumbnailList[currentPic].classList.add('active');

  if (counter === pictures.length) {
    currentPic = - 1;
  }

  if (pictures[currentPic].title.length > 0) {
    title.innerText = `${pictures[currentPic].title}`
  } else title.innerText = 'Without title'
};

const leftButton = document.getElementById('left');
leftButton.onclick = () => {
  let counter = currentPic + 1;

  if (counter === 1) {
    picturebox.setAttribute(
      'style',
      `background-image: url("${pictures[pictures.length - 1].path}");`
    );
    currentPic = pictures.length - 1;
  } else {
    picturebox.setAttribute(
      'style',
      `background-image: url("${pictures[currentPic - 1].path}");`
    );
    counter--;
    currentPic--;
  }

  activeThumbnailList.forEach((element) => {
    element.classList.remove('active');
  });

  activeThumbnailList[currentPic].classList.add('active');
  
  if (pictures[currentPic].title.length > 0) {
    title.innerText = `${pictures[currentPic].title}`
  } else title.innerText = 'Without title'
};


