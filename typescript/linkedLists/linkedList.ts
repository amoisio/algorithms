import ICollection from "../collection/iCollection";

/**
 * LINKED LIST
 * - New items are added to the end of the list O(1)
 * - Removing an item worst case is O(N)
 * 
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
    [n: number]: T;

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
        if (index < 0 || index >= this.size || this._root === undefined) {
            throw new Error("Index out of range.");
        }

        var previousNode: LinkedListNode<T> | undefined = undefined
        var removedNode: LinkedListNode<T> | undefined = this._root;
        while (index-- > 0) {
            previousNode = removedNode;
            removedNode = removedNode?.next;
        }

        if (removedNode === undefined) {
            throw new Error("Removed node was undefined. This should not happen.");
        }

        if (previousNode === undefined) {
            // Removing first item
            if (this._last === removedNode) {
                this._last = undefined;
                this._root = undefined;
            } else {
                this._root = removedNode.next;
            }
        } else if (removedNode.next === undefined) {
            // Removing last item
            this._last = previousNode;
            previousNode.next = undefined;
        } else {
            // Other cases
            previousNode.next = removedNode.next;
        }

        removedNode.next = undefined;
        this._size--;
        return removedNode?.value;
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