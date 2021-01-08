'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let todo = todoText.split('  ');
todo.splice(0, 0, 'My todo:\n');
todo.splice(todo.length, 0, ' - Download games\n');
todo.splice(todo.length, 0, '     - Diablo');

console.log(todo.join(''));
