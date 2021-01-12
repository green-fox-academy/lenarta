'use strict';

const pictures = [
  { title: '', path: 'assets/pic01.jpg' },
  { title: '', path: 'assets/pic02.jpg' },
  { title: 'Nebula', path: 'assets/pic03.jpg' },
  { title: 'Pillars', path: 'assets/pic04.jpg' },
  { title: '', path: 'assets/pic05.jpg' },
  { title: '', path: 'assets/pic06.jpg' },
  { title: '', path: 'assets/pic07.jpg' },
  { title: '8', path: 'assets/pic08.jpg' },
];

const thumbNailList = document.querySelector('.thumbnails');

for (let i = 0; i < pictures.length; i++) {
  let newPic = document.createElement('li');
  newPic.classList.add('pic');
  newPic.id = `pic0${i + 1}`;
  thumbNailList.appendChild(newPic);
  newPic.setAttribute('style', `background-image: url("${pictures[i].path}");`);
}

const activeThumbnailList = document.querySelectorAll('li');
const title = document.querySelector('h1');

const picturebox = document.querySelector('.picturebox');
let currentPic = 0;

picturebox.setAttribute(
  'style',
  `background-image: url("${pictures[currentPic].path}");`
);

const rightButton = document.getElementById('right');
rightButton.onclick = () => {

  if (currentPic === pictures.length - 1) {
    currentPic = -1;
  }

  picturebox.setAttribute(
    'style',
    `background-image: url("${pictures[currentPic + 1].path}");`
  );
  currentPic++;
  
  activeThumbnailList.forEach((element) => {
    element.classList.remove('active');
  });
  
  activeThumbnailList[currentPic].classList.add('active');
  
  if (pictures[currentPic].title.length > 0) {
    title.innerText = `${pictures[currentPic].title}`;
  } else title.innerText = 'Without title';
};


const leftButton = document.getElementById('left');
leftButton.onclick = () => {

  if (currentPic === 0) {
    currentPic = pictures.length;
  }

  picturebox.setAttribute(
    'style',
    `background-image: url("${pictures[currentPic - 1].path}");`
  );
  currentPic--;

  activeThumbnailList.forEach((element) => {
    element.classList.remove('active');
  });
  
  activeThumbnailList[currentPic].classList.add('active');
  
  if (pictures[currentPic].title.length > 0) {
    title.innerText = `${pictures[currentPic].title}`;
  } else title.innerText = 'Without title';
};
