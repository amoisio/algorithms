import { toArray } from './collectionUtilities.js'
import LinkedList from '../linkedLists/linkedList.js';

describe('toArray', () => {
    test('toArray reads out linked list item as an array', () => {
        let list = new LinkedList<number>();
        list.add(2);
        list.add(6);
        list.add(8);
        let array = toArray(list);
        expect(array).toStrictEqual([2, 6, 8]);
    });
});    