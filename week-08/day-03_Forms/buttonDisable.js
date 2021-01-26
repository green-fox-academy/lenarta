'use strict';

const activate = (element) => {
  element.disabled = false;
  element.setAttribute("style", "opacity: 1;")
}

const inactivate = (element) => {
  element.disabled = true;
  element.setAttribute("style", "opacity: 0.4;")
}

let viktor = false;

const loveCats = document.getElementById('lovecats');
loveCats.disabled = true;

const signUp = document.getElementById('signup');
signUp.disabled = true;

const container = document.querySelector('.container');

container.addEventListener('change', (e) => {
  console.log(e.target.value);

  if (e.target.value === 'Dog') {
    viktor = false;
    activate(signUp)
  }
  if (e.target.value === 'Cat') {
    viktor = false;
    activate(signUp)
  }
  if (e.target.value === 'Viktor') {
    viktor = true;
   inactivate(signUp)
    inactivate(loveCats)
  }
  if (e.target.value === 'yes') {
    activate(loveCats)
    activate(signUp)
  }
  if (e.target.value === 'no') {
    inactivate(loveCats)
  }
  if (e.target.value === 'no' && viktor) {
    inactivate(loveCats)
    activate(signUp)
  }

  if (e.target.value === 'yes' && viktor) {
    inactivate(signUp)
    activate(loveCats)
  }
});

let buttons = document.querySelector('.hidden')

buttons.addEventListener('click', (e) => {

  if (viktor && e.target.value === 'signup') {
  alert(`Sigh, we still added you to the cat facts list`)
  return
  }

  if (e.target.value === 'lovecats' || e.target.value === 'signup') {
  alert(`Thank you, you've successfully signed up for cat facts`)
  }
});
