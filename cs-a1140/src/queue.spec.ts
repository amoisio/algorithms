import Queue from "./queue";

describe('Queue', () => {
    it('Should enqueue the given item at the end of the queue', () => {
        let q = new Queue<number>();
        q.enqueue(2);
        q.enqueue(3);
        q.enqueue(4);

        expect(q.dequeue()).toBe(2);
        expect(q.dequeue()).toBe(3);
        expect(q.dequeue()).toBe(4);
    });
});