'use strict';
/*
You can work in the html or in a separate js file. Like:
    <script>
      1. store the element that says 'The King' in the 'king' variable.
      console.log it.
      2. store 'The Businessman' and 'The Lamplighter'
      in the 'businessLamp' variable.
      console.log each of them.
      3. store 'The King' and 'The Conceited Man'
      in the 'conceitedKing' variable.
      alert them one by one.
      4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
      in the 'noBusiness' variable.
      console.log each of them.
    </script>
    OR
    <script src="queryselector-1.js"></script>
    */
const king = document.getElementById('b325');
    console.log('king', king);
    //window.alert(king.innerText);

    const lamplighter = document.querySelector('.b329');
    console.log('lamplighter', lamplighter);

    const asteroids = document.querySelectorAll('div.asteroid');
    for (let i = 0; i < asteroids.length; i++) {
      console.log(asteroids[i]);
    }

    const businessLamp = [document.querySelector('p'), lamplighter]
    for (let i = 0; i < businessLamp.length; i++) {
      console.log('businessLamp', businessLamp[i]);
    }
    const conceitedMan = document.getElementsByClassName('asteroid b326')[0]
    //console.log(conceitedMan[0])

    const conceitedKing = [king, conceitedMan]
    console.log(document.getElementsByClassName('asteroid b326')[0]);

    for (let i = 0; i < conceitedKing.length; i++) {
      window.alert(conceitedKing[i].innerText)
    }

    const noBusiness = [king, conceitedMan, lamplighter]

    noBusiness.forEach(element => {
      console.log('No business',element)
    });