'use strict';

let planetList: string[] = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Uranus',
  'Neptune',
];

function putSaturn(list: string[]): string[] {
  list.splice(5, 0, 'Saturn');
  return list;
}

console.log(putSaturn(planetList));
