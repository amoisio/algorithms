import { exists } from 'fs';
import { syncBuiltinESMExports } from 'module';
import { CircularBuffer } from './circular-buffer.js';

describe('Circular buffer', () => {

  test('Can be pushed and popped a value', () => {
    const cb = new CircularBuffer<number>(5);
    cb.push(1);
    cb.push(2);

    expect(cb.pop()).toBe(1);
    expect(cb.pop()).toBe(2);
  });

  test('Returns undefined if popped when empty', () => {
    const cb = new CircularBuffer<number>(5);

    expect(cb.pop()).toBeUndefined();
  });

  test('Wraps around and overrides previous values', () => {
    const cb = new CircularBuffer<number>(3);
    cb.push(1);
    cb.push(2);
    cb.push(3);
    cb.push(4);

    expect(cb.pop()).toBe(2);
    expect(cb.pop()).toBe(3);
    expect(cb.pop()).toBe(4);
  });

  test('Can be initialized with an array of items', () => {
    const cb = new CircularBuffer<number>(3, [1, 2, 3]);
    expect(cb.pop()).toBe(1);
    expect(cb.pop()).toBe(2);
    expect(cb.pop()).toBe(3);
  });

  test('Can be iterated over in a for loop', () => {
    const cb = new CircularBuffer<number>(3, [1, 2, 10]);
    cb.pop();

    for (let val of cb) {
      expect([2, 10]).toContain(val);
    }
  });

  test('Empty buffer can be iterated over without an error', () => {
    const cb = new CircularBuffer<number>(3);

    for (let val of cb) {
      expect(val).toBeUndefined();
    }
  })
});