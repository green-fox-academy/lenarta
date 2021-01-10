'use strict';

const pictures = [
 {title: '' , path:'assets/pic01.jpg'},
 {title: '' , path: 'assets/pic02.jpg'},
 {title: 'Nebula' , path:'assets/pic03.jpg'},
 {title: 'Pillars' , path: 'assets/pic04.jpg'},
 {title: '' , path: 'assets/pic05.jpg'},
 {title: '' , path: 'assets/pic06.jpg'},
 {title: '' , path: 'assets/pic07.jpg'},
 {title: '' , path:'assets/pic08.jpg'},
]

const mainPic = document.querySelector('img');
console.log(mainPic.classList);

const picturebox = document.querySelector('.picturebox');

picturebox.setAttribute('style', 'background-image: url("assets/pic01.jpg");');

let thumbNailList = document.querySelector('.thumbnails');

console.log(thumbNailList);

for (let i = 0; i < pictures.length; i++) {
  let newPic = document.createElement('li');
  newPic.classList.add('pic')
  newPic.id = `pic0${i+1}`;
  console.log(newPic)
  thumbNailList.appendChild(newPic);
  newPic.setAttribute('style', `background-image: url("assets/pic0${i+1}.jpg");`);
}



button.onclick = () => {
  
};
