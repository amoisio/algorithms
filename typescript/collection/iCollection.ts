/**
 * Interface for a generic collection
 */
export default interface ICollection<T> {

    /**
     * Get the number of items in the list.
     */
    size(): number;

    /**
     * Determine if the collection is empty.
     */
    isEmpty(): boolean;

    /**
     * Add an item to the collection.
     * @param item Item to add.
     */
    add(item: T): void;

    /**
     * Removes and return an item from the collection
     * @returns Item that was removed.
     */
    remove(): T;

    /**
     * Defines an iterator for the collection
     */
    [Symbol.iterator](): Iterator<T>;
}