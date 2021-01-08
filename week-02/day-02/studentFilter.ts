'use strict';
export {};

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs:
//  - how many candies they have on average

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 },
];

function getCandies(list: any[]): string {
  let sum: string[] = [];
  for (let i: number = 0; i < list.length; i++) {
    if (students[i].candies > 4) {
      sum.push(students[i].name);
    }
  }
  return sum.join(', ');
}
console.log(getCandies(students));

function getAverage(list: any[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < list.length; i++) {
    sum += students[i].candies;
  }
  return sum / list.length;
}
console.log(getAverage(students));
