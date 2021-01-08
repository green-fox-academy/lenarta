'use strict';

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