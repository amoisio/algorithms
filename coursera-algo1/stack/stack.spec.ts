import Stack from './stack';
import { toArray } from '../collection/collectionUtilities';

describe('Stack operation', () => {
    test('Items can be pushed onto the stack', () => {
        let stack = new Stack<number>();

        stack.push(1);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(5);
        
        expect(toArray(stack)).toEqual([5, 3, 2, 1, 1]);
    });

    test('Items can be popped from the stack', () => {
        let stack = new Stack<number>();

        stack.push(1);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(5);
        let item = stack.pop();

        expect(item).toBe(5);
        expect(toArray(stack)).toEqual([3, 2, 1, 1]);
    });
});
