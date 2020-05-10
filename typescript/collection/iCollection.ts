/**
 * Interface for a generic collection
 */
export default interface ICollection<T> {

    /**
     * Get the number of items in the list.
     */
    size: number;

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
     * Remove (and return) the item at the specific index.
     * @param index Item index to remove.
     * @returns Item that was removed.
     */
    remove(index: number): T;

    /**
     * Get the item at the specific index.
     */
    getItem(index: number): T;

    /**
     * Get collection items as an array.
     */
    toArray(): T[];

    /**
     * Defines an iterator for the collection
     */
    [Symbol.iterator]():  Iterator<T>;
}