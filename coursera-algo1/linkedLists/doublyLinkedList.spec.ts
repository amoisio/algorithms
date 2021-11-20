import DoublyLinkedList from './doublyLinkedList';
import { toArray } from '../collection/collectionUtilities';

describe('Doubly linked list initialisation', () => {
    test('Doubly linked list initialises by default with size 0', () => {
        let list = new DoublyLinkedList<number>();

        expect(list.size()).toBe(0);
    });

    test('Doubly linked list with no entries is empty', () => {
        let list = new DoublyLinkedList<number>();

        expect(list.isEmpty()).toBeTruthy();
    });

    test('Doubly linked list with at least one entry is not empty', () => {
        let list = new DoublyLinkedList<number>();
        list.addFirst(1);

        expect(list.isEmpty()).toBeFalsy();
    })
});

describe('Doubly linked list item addition', () => {
    test('Items can be added to the front of the list', () => {
        let list = new DoublyLinkedList<number>();
        list.addFirst(15);
        list.addFirst(16);
        
        expect(toArray(list)).toStrictEqual([16, 15]);
    });

    test('Items can be added to the back of the list', () => {
        let list = new DoublyLinkedList<number>();
        list.addLast(10);
        list.addLast(9);

        expect(toArray(list)).toStrictEqual([10, 9]);
    });

    test('Adding null or undefined item throws an error', () => {
        let list = new DoublyLinkedList<number | null | undefined>();

        expect(() => list.addFirst(null))
            .toThrow();

        expect(() => list.addFirst(undefined))
            .toThrow();

        expect(() => list.addLast(null))
            .toThrow();

        expect(() => list.addLast(undefined))
            .toThrow();
    });

    test('Adding an item increases the size of the list', () => {
        let list = new DoublyLinkedList<number>();
        list.addFirst(5);
        list.addFirst(2);

        let size = list.size();
        list.addFirst(3);
        expect(list.size()).toBe(size + 1);
    });
});

describe('Doubly linked list item removal', () => {
    test('Trying to remove items from an empty list throws an error', () => {
        let list = new DoublyLinkedList<number>();

        expect(() => list.removeFirst())
            .toThrow();

        expect(() => list.removeLast())
            .toThrow();
    });

    test('Items can be removed from the front of the list', () => {
        let list = new DoublyLinkedList<number>();
        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);

        var removed = list.removeFirst();

        expect(removed).toBe(3);
        expect(list.size()).toBe(2);
        expect(toArray(list)).toEqual([2, 1]);
    });

    test('Items can be removed from the back of the list', () => {
        let list = new DoublyLinkedList<number>();
        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);

        var removed = list.removeLast();

        expect(removed).toBe(1);
        expect(list.size()).toBe(2);
        expect(toArray(list)).toEqual([3, 2]);
    });

    test('When the only item is removed, size is 0 and array is empty', () => {
        let list = new DoublyLinkedList<number>();
        list.addFirst(1);

        var removed = list.removeFirst();

        expect(removed).toBe(1);
        expect(list.size()).toBe(0);
    });

    test('Removing an item decreases the size of the list', () => {
        let list = new DoublyLinkedList<number>();
        list.addFirst(5);
        list.addLast(2);
        list.addFirst(3);

        let size = list.size();
        list.removeLast();

        expect(list.size()).toBe(size - 1);
    });
});

describe('Doubly linked list item access', () => {
    
    test('Items can be iterated with for..of', () => {
        let list = new DoublyLinkedList<number>();
        list.addFirst(5);
        list.addFirst(2);
        list.addFirst(3);

        expect(toArray(list)).toStrictEqual([3, 2, 5]);
    });
});