export default interface ILinkedListNode<T> {

    /**
     * Gets the next node in the list. Falsy if currently on the last node in the list.
     */
    next ?: ILinkedListNode<T>;
    /**
     * Gets the value of the current node. Falsy if value has not yet been assigned to the node.
     */
    value ?: T;
}
