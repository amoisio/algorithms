import ICollection from "../collection/iCollection.js";

/**
 * LINKED LIST
 * - Items are added to the back of the list in O(1) time
 * - Items are removed from the front of the list in O(1) time
  */
export default class LinkedList<T> implements ICollection<T> {
    
    private _size: number;
    private _root?: LinkedListNode<T>;
    private _last?: LinkedListNode<T>;

    constructor() {
        this._size = 0;
        this._root = undefined;
        this._last = undefined;
    }

    /**
     * Number of items in the list
     */
    public size(): number {
        return this._size;
    }

    /**
     * Determines if the linked list is empty.
     */
    public isEmpty(): boolean {
        return this._root == undefined;
    }

    /**
     * Adds an item to the back of the list.
     * @param item Item to add
     */
    public add(item: T): void {
        if (item === undefined || item === null) {
            throw new Error("Added item cannot be undefined or null.");
        }

        var newNode = new LinkedListNode<T>(item);

        if (this.isEmpty()) {
            this._root = newNode;
        } else {
            this._last!.next = newNode;
        }

        this._last = newNode;
        this._size++;
    }

    /**
     * Remove an item from the front of the list.
     * @returns Item that was removed.
     */
    public remove(): T {
        if (this._root === undefined) {
            throw new Error("List is empty.");
        }

        let removed: LinkedListNode<T> = this._root;
        this._root = removed.next;

        removed.next = undefined;
        this._size--;
        if (this.isEmpty()) {
            this._last = undefined;
            this._root = undefined;
        }

        return removed.value;
    }

    [Symbol.iterator](): Iterator<T> {
        let node: LinkedListNode<T> | undefined;
        return {
            next: () => {
                node = (node === undefined)
                    ? this._root
                    : node.next;

                return (node === undefined)
                    ? { done: true , value: undefined }
                    : { done: false, value: node?.value }; 
            }
        };
    }
}

/**
 * A node in the a singly-linked list
 */
class LinkedListNode<T> {
    private _value: T;
    private _next?: LinkedListNode<T>;

    constructor(value: T) {
        this._value = value;
        this._next = undefined;
    }

    get next(): LinkedListNode<T> | undefined {
        return this._next;
    }

    set next(node: LinkedListNode<T> | undefined) {
        this._next = node;
    }

    get value(): T {
        return this._value;
    }

    set value(modifiedValue: T) {
        this._value = modifiedValue;
    }
}