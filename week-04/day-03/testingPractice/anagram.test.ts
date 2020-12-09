import * as test from 'tape';
import { anagram } from './anagram';

test('should tell if those are anagrams', t => {

    const actual = anagram('god', 'dog');
    const expected = true;

    t.equal(actual, expected);
    t.end();
});

test('should tell if those are anagrams', t => {

    const actual = anagram('god', 'dogg');
    const expected = false;

    t.equal(actual, expected);
    t.end();
});
