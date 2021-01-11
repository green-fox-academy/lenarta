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
console.log(Object.values(pictures));

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
  console.log(newPic);
  thumbNailList.appendChild(newPic);
  newPic.setAttribute(
    'style',
    `background-image: url("${pictures[i].path}");`
  );
}

const rightButton = document.getElementById('right');
rightButton.onclick = () => {
  picturebox.setAttribute(
    'style',
    `background-image: url("${pictures[currentPic + 1].path}");`
  );

  let counter = currentPic + 1;
  counter++;
  currentPic++;

  if (counter === pictures.length) {
    currentPic = -1;
  }
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
    console.log(counter, currentPic);
  } else {
    picturebox.setAttribute(
      'style',
      `background-image: url("${pictures[currentPic - 1].path}");`
    );
    counter--;
    currentPic--;
  }
};
