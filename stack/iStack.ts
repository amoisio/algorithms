import ICollection from "collection/iCollection";

export default interface IStack<T> extends ICollection<T>{
    /**
     * Push item onto the stack
     * @param item Item to push on the stack.
     */
    push(item: T): void;

    /**
     * Pop item from the the stack
     */
    pop(): T;
}