/**
 * Interface for a generic 
 */
export default interface ICollection<T> {
    /**
     * Get the number of empty slots in the collection.
     */
    capacity: number;

    /**
     * Get the number of items in the list.
     */
    size: number;

    /**
     * Add an item to the collection.
     * @param item Item to add.
     */
    add(item: T): void;

    /**
     * Remove an item at the specific index.
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
}