import * as test from 'tape';
import { addTwoNumbers, removeLastElement } from './simpleExercise';

test('should add 2 numbers', t => {

  t.equal(3 + 2, 5);
  t.end();

});

test('should compare 2 strings', t => {

  t.equal('apple', 'apple');
  t.end();

});

// test('should add 2 numbers', function(t) {

// });

test('should add 2 numbers with function', t => {
  const actual = addTwoNumbers(3, 2);
  const expected = 5;

  t.equal(actual, expected);
  t.end();

});

test('should return null with negative number with function', t => {
  const actual = addTwoNumbers(-3, 2);
  const expected = null;

  t.equal(actual, expected);
  t.end();

});

test('should remove last element', t => {
  const testArray: number[] = [1, 2, 3, 4];
  const actual = removeLastElement(testArray);
  const expected = [1, 2, 3];

  // array es object vizsgalatra
  t.deepEqual(actual, expected);
  t.end();

});