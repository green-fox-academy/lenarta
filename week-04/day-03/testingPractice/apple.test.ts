import * as test from 'tape';
import { Apple } from './apple'

test('should return a string', t => {
    const operations = new Apple();

    const actual = operations.getApple('apple');
    const expected = 'apple'

    t.equal(actual, expected);
    t.end();
});
test('should return a string', t => {
    const operations = new Apple();

    const actual = operations.getApple('Apple');
    const expected = 'apple'

    t.equal(actual, expected);
    t.end();
});