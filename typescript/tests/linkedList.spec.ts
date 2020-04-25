import LinkedList from '../linkedList/linkedList';

describe('Linked list initialisation', () => {
    test('Linked list initialises by default with capacity 0', () => {
        let list = new LinkedList<number>();

        expect(list.capacity).toBe(0);
    });
});

describe('Linked list item addition', () => {
    test('Items can be added to the list', () => {
        let list = new LinkedList<number>();

        list.add(16);

        expect(list.toArray()).toContain(16);
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

        let size = list.size;
        list.add(3);
        expect(list.size).toBe(size + 1);
    });
});


describe('Linked list item removal', () => {
    test('Items can be removed from the list', () => {
        let list = new LinkedList<number>();
        list.add(1);
        list.add(2);
        list.add(3);

        let removed = list.remove(1 );

        expect(list.toArray()).toEqual([1, 3]);
        expect(removed).toBe(2);
    });

    test('Removing with out of bound index throws an error', () => {
        let list = new LinkedList<number>();
        list.add(1);
        list.add(2);

        expect(() => list.remove(12)).toThrow();
    });

    test('Removing an item decreases the size of the list', () => {
        let list = new LinkedList<number>();
        list.add(5);
        list.add(2);
        list.add(3);

        let size = list.size;
        list.remove(2);

        expect(list.size).toBe(size - 1);
    });
});

describe('Linked list item access', () => {
    test('Items can be accessed with a 0-based index', () => {
        let list = new LinkedList<number>();
        list.add(5);
        list.add(2);
        list.add(3);

        var arr = list.toArray();
        expect(list.getItem(0)).toBe(5);
        expect(list.getItem(1)).toBe(2);
        expect(list.getItem(2)).toBe(3);
    });
});