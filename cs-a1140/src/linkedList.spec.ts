import { LinkedList, ILinkedList } from "./linkedList";

describe('LinkedList', () => {
    let list: ILinkedList<number>;
    beforeEach(() => {
        list = new LinkedList();
    })

    it('Should increase in size when items are pushed into the list', () => {
        list.push(1);
        list.push(2);

        expect(list.size()).toBe(2);
    });

    it('Should position pushed items always at the back of the list', () => {
        list.push(21);
        list.push(13);

        expect(list.get(1)).toBe(13);
    });

    it('Should throw an error if getting with an oob index', () => {
        list.push(53);
        list.push(22);
        list.push(18);

        expect(() => list.get(3)).toThrow("Index out of bounds.");
    });

    it('Should return the item in the given index on get', () => {
        list.push(1);
        list.push(2);
        list.push(3);

        expect(list.get(1)).toBe(2);
    });

    it('Should decrease in size when items are poped from the list', () => {
        list.push(10);
        list.push(32);

        list.pop();
        
        expect(list.size()).toBe(1);
    });

    it('Should pop items from the back of the list', () => {
        list.push(10);
        list.push(32);
        list.push(76);

        let item = list.pop();

        expect(item).toBe(76);
    });

    it('Should increase in size when items are added to the list', () => {
        list.add(1);
        list.add(2);
        list.add(3);

        expect(list.size()).toBe(3);
    });

    it('Should position added items always to the beginning of the list', () => {
        list.add(21);
        list.add(13);

        expect(list.get(0)).toBe(13);
    });

    it('Should decrease in size when items are removed from the list', () => {
        list.add(10);
        list.add(32);

        list.remove();

        expect(list.size()).toBe(1);
    });

    it('Should remove items from the beginning of the list', () => {
        list.add(10);
        list.add(32);
        list.add(76);

        let item = list.remove();

        expect(item).toBe(76);
    });

    it('Should increase in size when items are inserted into the list', () => {
        list.add(14);
        list.add(41);
        list.insertAt(1, 50);

        expect(list.size()).toBe(3);
    });

    it('Should insert the item in the beginning of the list', () => {
        list.add(14);
        list.add(41);
        list.insertAt(0, 50);

        expect(list.get(0)).toBe(50);
    });

    it('Should insert the item at the end of the list', () => {
        list.add(14);
        list.add(41);
        list.insertAt(2, 50);

        expect(list.get(2)).toBe(50);
    });

    it('Should insert the item in the middle of the list', () => {
        list.add(14);
        list.add(41);
        list.insertAt(1, 50);

        expect(list.get(1)).toBe(50);
    });

    it('Should throw if inserting the item outside the list index range + 1', () => {
        list.add(14);
        list.add(41);

        expect(() => list.insertAt(3, 50)).toThrow();
    });

    it('Should decrease in size when items are deleted from the list', () => {
        list.add(14);
        list.add(41);
        list.deleteFrom(1);

        expect(list.size()).toBe(1);
    });

    it('Should delete the item from the beginning of the list', () => {
        list.add(14);
        list.add(50);
        list.add(41);

        expect(list.deleteFrom(0)).toBe(41);
    });

    it('Should delete the item from the end of the list', () => {
        list.add(14);
        list.add(50);
        list.add(41);
        
        expect(list.deleteFrom(2)).toBe(14);
    });

    it('Should delete the item from the middle of the list', () => {
        list.add(14);
        list.add(50);
        list.add(41);

        expect(list.deleteFrom(1)).toBe(50);
    });

    it('Should throw if deleting the item outside the list index range', () => {
        list.add(14);
        list.add(50);
        list.add(41);

        expect(() => list.deleteFrom(3)).toThrow();
    });
});