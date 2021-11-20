import ICollection from "collection/iCollection";

export default interface IQueue<T> extends ICollection<T> {
    /**
     * Add an item to the queue.
     * @param item Item to add to queue.
     */
    queue(item: T): void;

    /**
     * Remove an item from the queue
     */
    dequeue(): T;
}