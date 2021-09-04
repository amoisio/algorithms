export interface ILinkedList<T> {
    /**
     * Number of items currently in the list.
     */
    size(): number;

    /**
     * Adds a new item to the end of the list.
     * @param item Item to add.
     */
    push(item: T): void;

    /**
     * Removes an item from the end of the list.
     * @param item Item to remove.
     */
    pop(): T;

    /**
     * Inserts a new item at the specified index.
     * @param index Index of the new item.
     * @param item Item to insert.
     */
    insertAt(index: number, item: T): void;

    /**
     * Adds an item to the beginning of the list.
     * @param item Item to add.
     */
    add(item: T): void;

    /**
     * Removes an item from the start of the list.
     * @returns Item that was removed.
     */
    remove(): T;

    /**
     * Deletes an item from the given index of the list.
     * @param index Index of the item to remove.
     * @returns Item that was removed.
     */
    deleteFrom(index: number): T;

    /**
     * Get item from index.
     * @param index Index to read.
     */
    get(index: number): T;
}


export class LinkedList<T> implements ILinkedList<T> {
    private _size: number;
    private _start: LinkedNode<T> | undefined;
    private _end: LinkedNode<T> | undefined;

    constructor() {
        this._size = 0;
        this._start = undefined;
        this._end = undefined;
    }
    
    public size(): number {
        return this._size;
    }

    /**
     * Push item at the end of the list in O(1).
     */
    public push(item: T) {
        let newNode = new LinkedNode(item);
        if (this._start == undefined || this._end == undefined) {
            this._start = newNode;
        } else {
            this._end.next = newNode;
        }
        this._end = newNode;
        this._size++;
    }

    /**
     * Pop item from the end of the list in O(N).
     */
    public pop(): T {
        if (this._start == undefined || this._end == undefined)
            throw new Error("Nothing to pop, list is empty.");
        
        let value = this._end.value;
        if (this._size == 1) {
            this._start = undefined;
            this._end = undefined;
        } else {
            let penultimateIndex = this._size - 2;
            let penultimateNode = this.getNode(penultimateIndex);
            penultimateNode!.next = undefined;
            this._end = penultimateNode;
        }
        this._size--;
        return value;
    }
    
    public insertAt(index: number, item: T): void {
        if (index < 0 || index > this._size)
            throw new Error("Index out of bounds.");

        if (index == 0)
            this.add(item);
        else if (index == this._size)
            this.push(item);
        else {
            let newNode = new LinkedNode(item);
            let previousNode = this.getNode(index - 1);
            newNode.next = previousNode!.next;
            previousNode!.next = newNode;
            this._size++;
        }
    }

    /**
     * Add item to the start of the list in O(1).
     */
    public add(item: T): void {
        let ref = this._start;
        
        if (this._size == 1)
            this._end = ref;

        this._start = new LinkedNode(item);
        this._start.next = ref
        this._size++;
    }

    /**
     * Remove item from the start of the list in O(1).
     */
    public remove(): T {
        if (this._start == undefined)
            throw new Error("Nothing to remove, list is empty.");
        
        if (this._start == this._end)
            this._end = undefined;

        let item = this._start;
        this._start = this._start.next;
        item.next = undefined;
        this._size--;
        return item.value;
    }

    public deleteFrom(index: number): T {
        if (index < 0 || index >= this._size)
            throw new Error("Index out of bounds.");

        if (index == 0)
            return this.remove();
        
        if (index == this._size - 1)
            return this.pop();

        let previousNode = this.getNode(index - 1);
        let value = previousNode!.next!.value;
        previousNode!.next!.next = undefined;
        previousNode!.next = previousNode!.next!.next;
        this._size--;    
        return value;
    }

    public get(index: number): T {
        if (index < 0 || index >= this._size)
            throw new Error("Index out of bounds.");

        let node = this.getNode(index);
        return node!.value;
    }

    private getNode(index: number): LinkedNode<T> | undefined {
        let temp = this._start;
        for (let i = 0; i < index; i++) {
            temp = temp?.next;
        }
        return temp;
    }
}

class LinkedNode<T> {
    private _next?: LinkedNode<T>;
    private _value: T;

    constructor(value: T) {
        this._next = undefined;
        this._value = value;
    }

    get next(): LinkedNode<T> | undefined {
        return this._next;
    }

    set next(newNext: LinkedNode<T> | undefined) {
        this._next = newNext;
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;
    }
}