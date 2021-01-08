'use strict';

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(list: any[]): string[] {
  for (let i: number = 0; i < list.length; i++) {
    if (list[i] == 2) {
      list.splice(i, 1, 'Croissant');
    }
    if (list[i] == false) {
      list.splice(i, 1, 'Ice cream');
    }
  }
  return list;
}

console.log(sweets(shopItems));
