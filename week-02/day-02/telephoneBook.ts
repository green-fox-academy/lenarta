'use strict';

let phoneBook = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982',
};
console.log(phoneBook['John K. Miller']);

Object.keys(phoneBook).forEach((key) => {
  if (phoneBook[key] == '307-687-2982') {
    console.log(key);
  }
});

console.log(phoneBook.hasOwnProperty('Chris E. Myers'));
