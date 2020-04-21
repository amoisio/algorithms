export default interface ILinkedList<T> {
    /**
     * Gets the capacity, ie., the number of available nodes in the linked list.
     */
    capacity: number;

    /**
     * Gets the size, ie., the number of filled nodes in the linked list.
     */
    size: number;

    /**
     * Adds an item to the list.
     * @param item Item to add.
     */
    add(item: T): void;

    /**
     * Removes an item from the list.
     * @param item Item to remove.
     */
    remove(item: T): void;

    /**
     * Access an item from the list with a 0-based index.
     */
    getItem(index: number): T | undefined;

    /**
     * Writes out the list data as an array
     */
    toArray(): (T|undefined)[];
}

