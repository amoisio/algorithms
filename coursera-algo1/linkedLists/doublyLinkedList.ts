import IDeque from "collection/iDeque";

/**
 * LINKED LIST
 * - Items can be added to the back or front of the list in O(1) time
 * - Items can be removed from the back or front of the list in O(1) time
 * - Memory: 12 + n*(8 + m) where n is the number of items in the list and m is the size of the individual item
 */
export default class DoublyLinkedList<T> implements IDeque<T> {
    private _size: number;
    private _root?: LinkedListNode<T>;
    private _last?: LinkedListNode<T>;

    constructor() {
        this._size = 0;
        this._root = undefined;
        this._last = undefined;
    }

    /**
     * Number of nodes in the list
     */
    public size(): number {
        return this._size;
    }

    /**
     * Determines if the doubly linked list is empty
     */
    public isEmpty(): boolean {
        return this._root == undefined;
    }

    addFirst(item: T): void {
        if (item === undefined || item === null) {
            throw new Error("Added item cannot be undefined or null.");
        }

        var newNode = new LinkedListNode<T>(item);

        if (this.isEmpty()) {
            this._last = newNode;
        } else {
            newNode.next = this._root;
            this._root!.prev = newNode;
        }

        this._root = newNode;
        this._size++;
    }

    addLast(item: T): void {
        if (item === undefined || item === null) {
            throw new Error("Added item cannot be undefined or null.");
        }

        var newNode = new LinkedListNode<T>(item);

        if (this.isEmpty()) {
            this._root = newNode;
        } else {
            newNode.prev = this._last;
            this._last!.next = newNode;
        }

        this._last = newNode;
        this._size++;
    }

    removeFirst(): T {
        if (this._root === undefined || this._root === null) {
            throw new Error("List is empty.");
        }

        var removedNode = this._root;
        this._root = removedNode.next;
        removedNode.next = undefined;
        this._size--;

        if (this.isEmpty()) {
            this._last = undefined;
        } else {
            this._root!.prev = undefined;
        }

        return removedNode.value;
    }

    removeLast(): T {
        if (this._last === undefined || this._last === null) {
            throw new Error("List is empty.");
        }

        var removedNode = this._last;
        this._last = removedNode.prev;
        removedNode.prev = undefined;
        this._size--;

        if (this.isEmpty()) {
            this._root = undefined;
        } else {
            this._last!.next = undefined;
        }

        return removedNode.value;
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
 * A node in the a doubly-linked list
 */
class LinkedListNode<T> {
    private _value : T;
    private _next ?: LinkedListNode<T>;
    private _prev ?: LinkedListNode<T>;

    constructor(value: T) {
        this._value = value;
        this._next = undefined;
        this._prev = undefined;
    }

    get next(): LinkedListNode<T> | undefined {
        return this._next;
    }

    set next(node: LinkedListNode<T> | undefined) {
        this._next = node;
    }

    get prev(): LinkedListNode<T> | undefined {
        return this._prev;
    }

    set prev(node: LinkedListNode<T> | undefined) {
        this._prev = node;
    }

    get value(): T {
        return this._value;
    }

    set value(modifiedValue: T) {
        this._value = modifiedValue;
    }
}