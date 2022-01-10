import ICollection from "./iCollection.js";

/**
 * Interface for a generic double-ended queue
 */
export default interface IDeque<T> extends ICollection<T> {
    
    /**
     * Add the item to the front.
     * @param item item to add
     */
    addFirst(item: T): void;

    /**
     * Add the item to the back.
     * @param item item to add
     */
    addLast(item: T): void;

    /**
     * Remove and return the item from the front.
     */
    removeFirst(): T;

    /**
     * Remove and return the item from the back.
     */
    removeLast(): T;
}