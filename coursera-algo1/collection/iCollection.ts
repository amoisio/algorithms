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
     * Defines an iterator for the collection
     */
    [Symbol.iterator](): Iterator<T>;
}