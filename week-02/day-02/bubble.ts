'use strict';

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

function bubble(list: number[]) {
  return list.sort((a, b) => a - b);
}

function advancedBubble(list: number[], truefalse: boolean) {
  if (truefalse) {
    return list.sort((a, b) => a + b);
  } else return list.sort((a, b) => a - b);
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});
console.log(items);
