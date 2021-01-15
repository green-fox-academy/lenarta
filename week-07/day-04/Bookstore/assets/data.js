'use strict';

const xhr = new XMLHttpRequest();
let method = 'GET';
let endpoint = '/data';
xhr.open(method, endpoint);
xhr.send();

xhr.onload = () => {
  const data = JSON.parse(xhr.response);
  console.log(data)

  let list = document.querySelector('div');

  for (let i = 0; i < data.length; i++) {
    let book = document.createElement('li');
    book.innerText = `"${data[i].book_name}"`;
    list.appendChild(book);
  }
};