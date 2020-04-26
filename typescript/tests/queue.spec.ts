import LinkedList from '../linkedList/linkedList';
import ICollection from '../collection/iCollection';
import Queue from '../queue/queue';

describe('Queue operation', () => {
    test('Items can be added to the end of the queue', () => {
        let list: ICollection<number> = new LinkedList<number>();
        let queue = new Queue<number>(list);

        queue.queue(1);
        queue.queue(1);
        queue.queue(2);
        queue.queue(3);
        queue.queue(5);
        
        expect(queue.toArray()).toEqual([1,1,2,3,5]);
    });

    test('Items can be removed from beginning of the queue', () => {
        let list: ICollection<number> = new LinkedList<number>();
        let queue = new Queue<number>(list);

        queue.queue(1);
        queue.queue(1);
        queue.queue(2);
        queue.queue(3);
        queue.queue(5);
        let item = queue.dequeue();

        expect(item).toBe(1);
        expect(queue.toArray()).toEqual([1,2,3,5]);
    });
});
