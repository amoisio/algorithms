import LinkedList from '../linkedList/linkedList';

describe('Linked list initialisation', () => {
    test('Linked list cannot be initialised with a non-negative capacity', () => {
        expect(() => new LinkedList<number>(-3))
            .toThrow("Capacity must be non-negative.");
    });

    test('Linked list initialises by default with capacity 0', () => {
        let list = new LinkedList<number>();

        expect(list.capacity).toBe(0);
    });

    test('Linked list can be initialised with N empty nodes', () => {
        let list = new LinkedList<number>(5);

        expect(list.capacity).toBe(5);
    });
});

describe('Linked list item addition', () => {
    test('Items can be added to the list', () => {
        let list = new LinkedList<number>(5);

        list.add(16);

        expect(list.toArray()).toContain(16);
    });

    test('Adding null or undefined item throws an error', () => {
        let list = new LinkedList<number>(5);

        expect(() => list.add(null))
            .toThrow();

        expect(() => list.add(undefined))
            .toThrow();
    });

    test('Adding an item increases the size of the list', () => {
        let list = new LinkedList<number>(5);
        list.add(5);
        list.add(2);

        let size = list.size;
        list.add(3);
        expect(list.size).toBe(size + 1);
    });

    test('Adding an item does not increase the capacity of the list if the list is not full', () => {
        let list = new LinkedList<number>(5);
        list.add(5);
        list.add(2);

        let cap = list.capacity;
        list.add(3);
        expect(list.capacity).toBe(cap);
    });

    test('Adding an item increases the capacity of the list if the list is full', () => {
        let list = new LinkedList<number>(2);
        list.add(5);
        list.add(2);

        let cap = list.capacity;
        list.add(3);
        expect(list.capacity).toBe(cap + 1);
    });
});


describe('Linked list item removal', () => {
    test('Items can be removed from the list', () => {
        let list = new LinkedList<number>(5);
        list.add(1);
        list.add(2);
        list.add(3);

        let ok = list.remove(2);

        expect(list.toArray()).toEqual([1, 3]);
        expect(ok).toBeTruthy();
    });

    test('Removing null, undefined or not found item return false', () => {
        let list = new LinkedList<number>(5);
        list.add(1);
        list.add(2);

        expect(list.remove(null)).toBeFalsy();
        expect(list.remove(undefined)).toBeFalsy();
        expect(list.remove(123)).toBeFalsy();
    });

    test('Removing an item decreases the size and capacity of the list', () => {
        let list = new LinkedList<number>(5);
        list.add(5);
        list.add(2);
        list.add(3);

        let size = list.size;
        let cap = list.capacity;
        list.remove(2);

        expect(list.size).toBe(size - 1);
        expect(list.capacity).toBe(cap - 1);
    });
});

describe('Linked list item access', () => {
    test('Items can be accessed with a 0-based index', () => {
        let list = new LinkedList<number>(5);
        list.add(5);
        list.add(2);
        list.add(3);

        var arr = list.toArray();
        expect(list.getItem(0)).toBe(5);
        expect(list.getItem(1)).toBe(2);
        expect(list.getItem(2)).toBe(3);
    });
});