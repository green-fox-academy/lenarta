import * as test from 'tape';
import { NumberOperations } from './sample02';

test('add 2 numbers', t => {
    const operations = new NumberOperations();

    var actual = operations.addNum(1, 2);
    var expected = 3;

    t.equal(actual, expected);
    t.end();
});

test('subtract 2 numbers', t => {
    const operations = new NumberOperations();

    t.equal(operations.subtractNum(2, 1), 1);
    t.end();
});