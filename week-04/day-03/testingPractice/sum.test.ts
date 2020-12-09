import * as test from 'tape';
import { Sum } from './sum';

test('should summarise', t => {
    const operations = new Sum();

    const actual = operations.sum([1, 2, 3, 4, 5]);
    const expected = 15;

    t.equal(actual, expected);
    t.end();
});

test('should summarise', t => {
    const operations = new Sum();

    const actual = operations.sum([]);
    const expected = 0;

    t.equal(actual, expected);
    t.end();
});

test('should summarise', t => {
    const operations = new Sum();

    const actual = operations.sum([98]);
    const expected = 98;

    t.equal(actual, expected);
    t.end();
});


