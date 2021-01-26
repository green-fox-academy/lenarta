'use strict';

require('es6-promise');
/*
setTimeout(() => {
  console.log('TIMED OUT!')
}, 300);*/

/*
let promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    fulfill('FULFILLED!')
  }, 300);
})

promise.then(console.log);*/

/*
let promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

promise.then(null, onReject);*/

/*
let promise = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
  console.log(error.message);
}

promise.then(console.log, onReject);*/

let promise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE');
});

promise.then(console.log);
console.log('MAIN PROGRAM');

var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
});
// It does the exact same thing as above:
var promise = Promise.resolve('SECRET VALUE');

var promise = new Promise(function (fulfill, reject) {
  reject(new Error('SECRET VALUE'));
});

var promise = Promise.reject(new Error('SECRET VALUE'));
