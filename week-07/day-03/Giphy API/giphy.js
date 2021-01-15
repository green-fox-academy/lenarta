'use strict';

const xhr = new XMLHttpRequest();
let method = 'GET';
let endpoint =
  'https://api.giphy.com/v1/gifs/search?api_key=0FA2MtgfrH0zH2sNMUWJ7mI8a5Qv9uSb&q=shaun&limit=25&offset=0&rating=g&lang=en';
xhr.open(method, endpoint);
xhr.send();

xhr.onload = () => {
  const giphylist = JSON.parse(xhr.response);
  console.log(giphylist.data[0].url);

  const thumbnails = document.querySelector('.thumbnails');

  for (let i = 0; i < giphylist.data.length && i < 17; i++) {
    let giphy = document.createElement('li');
    giphy.innerHTML = `<a href="${giphylist.data[i].embed_url}"><img src="${giphylist.data[i].images.fixed_height.url}[0]" style="all:unset;background-attachment:fixed;width:80px;height:80px;list-style-type:none;"></a>`;
    thumbnails.appendChild(giphy);
  }
};
