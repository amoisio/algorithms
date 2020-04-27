import ICollection from "../collection/iCollection";

/**
 * LINKED LIST
 * - New items are added to the end of the list O(1)
 * - Removing an item worst case is O(N)
 * 
 */
export default class DoublyLinkedList<T> implements ICollection<T> {
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
    public get size(): number {
        return this._size;
    }

    public isEmpty(): boolean {
        return this._root == undefined;
    }

    /**
     * Adds an item to the list.
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
            newNode.prev = this._last;
        }

        this._last = newNode;
        this._size++;
    }

    /**
     * Remove an item at the specific index.
     * @param index Item to remove
     * @returns Item that was removed
     */
    public remove(index: number): T {
        if (index < 0 || index >= this.size || this._root === undefined || this._last === undefined) {
            throw new Error("Index out of range.");
        }
        let removed: LinkedListNode<T>;

        if (index == 0) {
            removed = this._root;
            this._root = removed.next;
        } else if(index == this._size - 1) {
            removed = this._last;
            this._last = removed.prev;
        } else {
            removed = this._root;
            while (index-- > 0) {
                removed = removed.next!;
            }
            removed.prev!.next = removed.next;
            removed.next!.prev = removed.prev;
        }

        removed.next = undefined;
        removed.prev = undefined;
        this._size--;
        if (this.isEmpty()) {
            this._last = undefined;
            this._root = undefined;
        }

        return removed.value;
    }

    public getItem(index: number): T {
        let count = index;
        let node = this._root;
        while (count-- > 0) {
            node = node?.next;
        }

        if (node === undefined) {
            throw new Error("Node was undefined.");
        }

        if (node?.value === undefined) {
            throw new Error("Node value was undefined.");
        }
        return node?.value;
    }

    public toArray(): T[] {
        let arr: T[] = [];

        let node = this._root;
        let t = this._size;
        while (node !== undefined && t-- > 0) {
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }
}

/**
 * A node in the a singly-linked list
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