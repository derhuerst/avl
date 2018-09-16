import { describe, it } from 'mocha';
import { assert }       from 'chai';
import isIterable       from 'is-iterable';

import Tree from '../src/index';

describe('iterable interfaces', () => {

  it ('keysIterable() should return an iterable of sorted keys', () => {
    const t = new Tree((a, b) => b - a);
    t.insert(5, '5');
    t.insert(-10, '-10');
    t.insert(0, '0');
    t.insert(33, '33');
    t.insert(2, '2');

    const keys = t.keysIterable();
    assert.ok(isIterable(keys));
    assert.deepEqual(Array.from(keys), [33, 5, 2, 0, -10]);
  });

  it ('valuesIterable() should return an iterable of sorted values', () => {
    const t = new Tree((a, b) => b - a);
    t.insert(5, '5');
    t.insert(-10, '-10');
    t.insert(0, '0');
    t.insert(33, '33');
    t.insert(2, '2');

    const vals = t.valuesIterable();
    assert.ok(isIterable(vals));
    assert.deepEqual(Array.from(vals), ['33', '5', '2', '0', '-10']);
  });

  it ('should be an iterable of sorted entries', () => {
    const t = new Tree((a, b) => b - a);
    t.insert(5, '5');
    t.insert(-10, '-10');
    t.insert(0, '0');
    t.insert(33, '33');
    t.insert(2, '2');

    assert.ok(isIterable(t));
    assert.deepEqual(Array.from(t), [
        [33, '33'],
        [5, '5'],
        [2, '2'],
        [0, '0'],
        [-10, '-10']
    ]);
  });

});
