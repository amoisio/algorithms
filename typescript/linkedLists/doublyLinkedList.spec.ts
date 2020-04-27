import DoublyLinkedList from './doublyLinkedList';

describe('Doubly linked list initialisation', () => {
    test('Doubly linked list initialises by default with size 0', () => {
        let list = new DoublyLinkedList<number>();

        expect(list.size).toBe(0);
    });

    test('Doubly linked list with no entries is empty', () => {
        let list = new DoublyLinkedList<number>();

        expect(list.isEmpty()).toBeTruthy();
    });

    test('Doubly linked list with at least one entry is not empty', () => {
        let list = new DoublyLinkedList<number>();
        list.add(1);

        expect(list.isEmpty()).toBeFalsy();
    })
});

describe('Doubly linked list item addition', () => {
    test('Items can be added to the list', () => {
        let list = new DoublyLinkedList<number>();

        list.add(16);

        expect(list.toArray()).toContain(16);
    });

    test('Adding null or undefined item throws an error', () => {
        let list = new DoublyLinkedList<number>();

        expect(() => list.add(null))
            .toThrow();

        expect(() => list.add(undefined))
            .toThrow();
    });

    test('Adding an item increases the size of the list', () => {
        let list = new DoublyLinkedList<number>();
        list.add(5);
        list.add(2);

        let size = list.size;
        list.add(3);
        expect(list.size).toBe(size + 1);
    });
});


describe('Doubly linked list item removal', () => {
    test('When the only item is removed, size is 0 and array is empty', () => {
        let list = new DoublyLinkedList<number>();
        list.add(1);

        var removed = list.remove(0);

        expect(removed).toBe(1);
        expect(list.size).toBe(0);
        expect(list.toArray().length).toBe(0);
    });

    test('The first item can be removed', () => {
        let list = new DoublyLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);

        var removed = list.remove(0);

        expect(removed).toBe(1);
        expect(list.size).toBe(2);
        expect(list.toArray()).toEqual([2, 3]);
    });

    test('The last item can be removed', () => {
        let list = new DoublyLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);

        var removed = list.remove(2);

        expect(removed).toBe(3);
        expect(list.size).toBe(2);
        expect(list.toArray()).toEqual([1, 2]);
    });


    test('Items can be removed from the list', () => {
        let list = new DoublyLinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);

        let removed = list.remove(1 );

        expect(list.toArray()).toEqual([1, 3]);
        expect(removed).toBe(2);
    });

    test('Removing with out of bound index throws an error', () => {
        let list = new DoublyLinkedList<number>();
        list.add(1);
        list.add(2);

        expect(() => list.remove(12)).toThrow();
    });

    test('Removing an item decreases the size of the list', () => {
        let list = new DoublyLinkedList<number>();
        list.add(5);
        list.add(2);
        list.add(3);

        let size = list.size;
        list.remove(2);

        expect(list.size).toBe(size - 1);
    });
});

describe('Doubly linked list item access', () => {
    test('Items can be accessed with a 0-based index', () => {
        let list = new DoublyLinkedList<number>();
        list.add(5);
        list.add(2);
        list.add(3);

        var arr = list.toArray();
        expect(list.getItem(0)).toBe(5);
        expect(list.getItem(1)).toBe(2);
        expect(list.getItem(2)).toBe(3);
    });
});