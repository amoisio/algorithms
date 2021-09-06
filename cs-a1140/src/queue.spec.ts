import Queue from "./queue";

describe('Queue', () => {
    it('Should enqueue the item at the end of the queue', () => {
        let q = new Queue<number>();
        q.enqueue(2);
        q.enqueue(3);
        q.enqueue(4);

        const data = q.toArray();

        expect(data[2]).toBe(4);
    });

    it('Should dequeue an item from the beginning of the queue', () => {
        let q = new Queue<number>();
        q.enqueue(2);
        q.enqueue(3);
        q.enqueue(4);


        const data = q.dequeue();

        expect(data).toBe(2);
    });

});