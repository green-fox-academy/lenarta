'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const url = document.getElementById('url').value;
  const requestBody = JSON.stringify({ title: title, url: url });
  //console.log(requestBody);

  if (title && url) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/post');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(requestBody);
    xhr.onreadystatechange = (event) => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const post = JSON.parse(xhr.responseText);
        console.log(post[0]);
        let confirm = document.querySelector('.confirm');
        let confirmText = document.createElement('div');
        const currentTime = new Date();
        confirmText.innerHTML = `Post "${post[0].title}", content: ${post[0].url}<br> added at <br> ${currentTime}`;
        confirm.appendChild(confirmText);
        let buttons = document.querySelectorAll('.hidden');
        buttons.forEach((element) => {
          element.classList.remove('hidden');
        });

        setTimeout(() => {
          //window.location.href = 'http://localhost:3000';
        }, 2000);
        form.reset();
      }
    };
  }
});

let okButton = document.querySelector('#ok');
okButton.addEventListener('click', () => {
  window.location.href = 'http://localhost:3000';
});
document.querySelector('#remove').addEventListener('click', () => {});
