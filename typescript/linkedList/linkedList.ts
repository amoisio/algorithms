import ILinkedList from "./iLinkedList";
import LinkedListNode from "./linkedListNode";
import ILinkedListNode from "./iLinkedListNode";
import { notDeepEqual } from "assert";

export default class LinkedList<T> implements ILinkedList<T> {
    private _capacity: number;
    private _size: number;
    private _root?: ILinkedListNode<T>;
    private _last?: ILinkedListNode<T>;

    constructor(capacity: number = 0) {
        if (capacity && capacity < 0) {
            throw new Error("Capacity must be non-negative.");
        }

        this._size = 0;
        this._capacity = capacity;
        this._root = this.createList(capacity);
        this._last = undefined;
    }

    /**
     * Creates a new linked list. Returns a reference to the first list node.
     * @param capacity Number of empty nodes to create
     */
    private createList(capacity: number): ILinkedListNode<T> | undefined {

        if (capacity == 0) {
            return undefined;
        }

        let root = new LinkedListNode<T>();
        let node = root;
        for (let i = 1; i < capacity; i++) {
            let temp = new LinkedListNode<T>();
            node.next = temp;
            node = temp;
        }

        return root;
    }

    /**
     * Number of nodes in the list.
     */
    public get capacity(): number {
        return this._capacity;
    }

    /**
     * Number of non-empty nodes in the list.
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

        let node = this.getOrCreateAvailableNode();
        node.value = item;
        this._size++;
    }

    /**
     * Gets an available node. Creates a new node if all nodes already used. 
     */
    private getOrCreateAvailableNode(): ILinkedListNode<T> {

        if (this._root === undefined) {
            this._root = new LinkedListNode();
            this._capacity++;
        }

        if (this._last === undefined) {
            this._last = this._root;
            return this._root;
        }

        if (this._last.next === undefined) {
            this._last.next = new LinkedListNode<T>();
            this._capacity++;
        }

        let availableNode = this._last.next;
        this._last = availableNode;
        return availableNode;
    }

    /**
     * Removes all macthes from the list.
     * @param item Item to remove
     */
    public remove(item: T): boolean {
        if (item === undefined || item === null) {
            return false;
        }

        let result: boolean = false;

        let prev: ILinkedListNode<T> | undefined;
        let node: ILinkedListNode<T> | undefined = this._root;

        let t = this._size;
        while (node !== undefined && t-- > 0) {

            if (node.value !== item) {
                prev = node;
                node = node.next;
                continue;
            }

            if (prev === undefined) {
                this._root = node.next;
                node.next = undefined;
                node = this._root;
            } else {
                prev.next = node.next;
                node.next = undefined;
                node = prev.next;
            }

            this._capacity--;
            this._size--;
            result = true;

        }

        return result;
    }


    public getItem(index: number): T | undefined{
        let count = index;
        let node = this._root;
        while (count-- > 0) {
            node = node?.next;
        }
        return node?.value;
    }

    public toArray(): (T|undefined)[] {
        let arr: (T|undefined)[] = [];

        let node = this._root;
        let t = this._size;
        while (node !== undefined && t-- > 0) {
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }


}