import LinkedList from './linkedList';
import { toArray } from '../collection/collectionUtilities';
describe('Linked list initialisation', () => {
    test('Linked list initialises by default with size 0', () => {
        let list = new LinkedList<number>();

        expect(list.size()).toBe(0);
    });

    test('Linked list with no entries is empty', () => {
        let list = new LinkedList<number>();

        expect(list.isEmpty()).toBeTruthy();
    });

    test('Linked list with at least one entry is not empty', () => {
        let list = new LinkedList<number>();
        list.add(1);

        expect(list.isEmpty()).toBeFalsy();
    })
});

describe('Linked list item addition', () => {
    test('Items can be added to the list', () => {
        let list = new LinkedList<number>();

        list.add(16);

        expect(toArray(list)).toContain(16);
    });

    test('Adding null or undefined item throws an error', () => {
        let list = new LinkedList<number>();

        expect(() => list.add(null))
            .toThrow();

        expect(() => list.add(undefined))
            .toThrow();
    });

    test('Adding an item increases the size of the list', () => {
        let list = new LinkedList<number>();
        list.add(5);
        list.add(2);

        let size = list.size();
        list.add(3);
        expect(list.size()).toBe(size + 1);
    });
});


describe('Linked list item removal', () => {
    test('When the only item is removed, size is 0 and array is empty', () => {
        let list = new LinkedList<number>();
        list.add(1);

        var removed = list.remove();

        expect(removed).toBe(1);
        expect(list.size()).toBe(0);
    });

    test('The last item can be removed', () => {
        let list = new LinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);

        var removed = list.remove();

        expect(removed).toBe(1);
        expect(list.size()).toBe(2);
    });


    test('Items can be removed from the list', () => {
        let list = new LinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);

        let removed = list.remove();

        expect(toArray(list)).toEqual([2, 3]);
        expect(removed).toBe(1);
    });

    test('Removing an item decreases the size of the list', () => {
        let list = new LinkedList<number>();
        list.add(5);
        list.add(2);
        list.add(3);

        let size = list.size();
        list.remove();

        expect(list.size()).toBe(size - 1);
    });
});

describe('Linked list item access', () => {
    test('List can be converted to an array with ToArray', () => {
        let list = new LinkedList<number>();
        list.add(5);
        list.add(2);
        list.add(3);

        expect(toArray(list)).toStrictEqual([5, 2, 3]);
    });

    test('Linked list can be iterated with for..of', () => {
        let list = new LinkedList<number>();
        list.add(5);
        list.add(2);
        list.add(3);

        for(let item of list) {
            expect(toArray(list)).toContain(item);
        }
    });
});