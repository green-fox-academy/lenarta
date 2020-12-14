import * as test from 'tape';
import { countLetters } from './countLetters';

test('should show how many occurrences there are in an object', t => {

    const actual = countLetters('sajt');
    const expected = { s: 1, a: 1, j: 1, t: 1 };

    t.deepEqual(actual, expected);
    t.end();
});
