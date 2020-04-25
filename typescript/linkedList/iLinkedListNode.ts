export default interface ILinkedListNode<T> {

    /**
     * Gets the next node in the list. Falsy if currently on the last node in the list.
     */
    next ?: ILinkedListNode<T>;
    /**
     * Gets the value of the current node
     */
    value : T;
}
