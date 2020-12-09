import * as test from 'tape';
import { Sum } from './sum';

test('should summarise', t => {
    const operations = new Sum();

    const actual = operations.sum([1, 2]);
    const expected = 3;

    t.equal(actual, expected);
    t.end();
});
