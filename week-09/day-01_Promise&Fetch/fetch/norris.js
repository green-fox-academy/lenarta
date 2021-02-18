'use strict';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  let jokes = document.querySelector('div');

  fetch('http://api.icndb.com/jokes/random')
    .then((response) => {
      //response Object megszerzese
      if (response.status !== 200) {
        throw new Error('nincs valasz');
      }
      return response;
    })
    .then((response) => response.json())
    .then((response) => {
      let print = document.createElement('div');
      print.innerHTML = `${response.value.joke}<br><br>`;
      jokes.appendChild(print);
      console.log(response);
    })
    .catch((err) => {
      console.log(err); //hibakezeles
    });
});
