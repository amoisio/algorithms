import LinkedList from '../linkedLists/linkedList';
import ICollection from '../collection/iCollection';
import Stack from './stack';

describe('Stack operation', () => {
    test('Items can be pushed onto the stack', () => {
        let list: ICollection<number> = new LinkedList<number>();
        let stack = new Stack<number>(list);

        stack.push(1);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(5);
        
        expect(stack.toArray()).toEqual([1,1,2,3,5]);
    });

    test('Items can be popped from the stack', () => {
        let list: ICollection<number> = new LinkedList<number>();
        let stack = new Stack<number>(list);

        stack.push(1);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(5);
        let item = stack.pop();

        expect(item).toBe(5);
        expect(stack.toArray()).toEqual([1,1,2,3]);
    });
});
