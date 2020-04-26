import ICollection from "../collection/iCollection";
import LinkedListNode from "./linkedListNode";
import ILinkedListNode from "./iLinkedListNode";

export default class LinkedList<T> implements ICollection<T> {
    private _size: number;
    private _root?: ILinkedListNode<T>;
    private _last?: ILinkedListNode<T>;

    constructor() {
        this._size = 0;
        this._root = undefined;
        this._last = undefined;
    }

    /**
     * Number of nodes in the list.
     */
    public get capacity(): number {
        return this._size;
    }

    /**
     * Number of nodes in the list (same as capacity)
     */
    public get size(): number {
        return this._size;
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

        if (this._last === undefined) {
            this._root = newNode;
        } else {
            this._last.next = newNode;
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

        var previousNode: ILinkedListNode<T> | undefined = undefined
        var removedNode: ILinkedListNode<T> | undefined = this._root;
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