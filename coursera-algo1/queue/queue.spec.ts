import Queue from './queue';
import { toArray } from '../collection/collectionUtilities';

describe('Queue operation', () => {
    test('Items can be added to the end of the queue', () => {
        let queue = new Queue<number>();

        queue.queue(1);
        queue.queue(1);
        queue.queue(2);
        queue.queue(3);
        queue.queue(5);
        
        expect(toArray(queue)).toEqual([5,3,2,1,1]);
    });

    test('Items can be removed from beginning of the queue', () => {
        let queue = new Queue<number>();

        queue.queue(1);
        queue.queue(1);
        queue.queue(2);
        queue.queue(3);
        queue.queue(5);
        let item = queue.dequeue();

        expect(item).toBe(1);
        expect(toArray(queue)).toEqual([5,3,2,1]);
    });
});
