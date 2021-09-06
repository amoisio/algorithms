import { ILinkedList } from "./linkedList";

export class DoublyLinkedList<T> implements ILinkedList<T> {
    private _size: number;
    private _start: DoublyLinkedNode<T> | undefined;
    private _end: DoublyLinkedNode<T> | undefined;

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
        let newNode = new DoublyLinkedNode(item);
        if (this._start == undefined || this._end == undefined) {
            this._start = newNode;
        } else {
            this._end.next = newNode;
            newNode.prev = this._end;
        }
        this._end = newNode;
        this._size++;
    }

    /**
     * Pop item from the end of the list in O(1).
     */
    public pop(): T {
        if (this._start == undefined || this._end == undefined)
            throw new Error("Nothing to pop, list is empty.");
        
        let value = this._end.value;
        if (this._size == 1) {
            this._start = undefined;
            this._end = undefined;
        } else {
            let newEnd = this._end.prev;
            newEnd!.next = undefined;
            this._end.prev = undefined;
            this._end = newEnd;
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
            let newNode = new DoublyLinkedNode(item);
            let previousNode = this.getNode(index - 1);
            newNode.next = previousNode!.next;
            newNode.prev = previousNode;
            previousNode!.next!.prev = newNode;
            previousNode!.next = newNode;
            this._size++;
        }
    }

    /**
     * Add item to the start of the list in O(1).
     */
    public add(item: T): void {
        let newNode = new DoublyLinkedNode(item);
        if (this._start === undefined){
            this._end = newNode;
        } else {
            newNode.next = this._start;
            this._start.prev = newNode;
        }
        this._start = newNode;
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
        this._start!.prev = undefined;
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

        let node = this.getNode(index);
        node!.prev!.next = node!.next;
        node!.next!.prev = node!.prev;
        node!.next = undefined;
        node!.prev = undefined;
        this._size--;    
        return node!.value;
    }

    public get(index: number): T {
        if (index < 0 || index >= this._size)
            throw new Error("Index out of bounds.");

        let node = this.getNode(index);
        return node!.value;
    }

    private getNode(index: number): DoublyLinkedNode<T> | undefined {
        let temp = this._start;
        for (let i = 0; i < index; i++) {
            temp = temp?.next;
        }
        return temp;
    }

    public toArray(): T[] {
        let array: T[] = [];
        for (let i = 0; i < this._size; i++) {
            array.push(this.get(i));
        }
        return array;
    }
}

class DoublyLinkedNode<T> {
    private _next?: DoublyLinkedNode<T>;
    private _value: T;
    private _prev?: DoublyLinkedNode<T>;

    constructor(value: T) {
        this._next = undefined;
        this._value = value;
        this._prev = undefined;
    }

    get next(): DoublyLinkedNode<T> | undefined {
        return this._next;
    }

    set next(newNext: DoublyLinkedNode<T> | undefined) {
        this._next = newNext;
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;
    }

    get prev(): DoublyLinkedNode<T> | undefined {
        return this._prev;
    }

    set prev(newPrev: DoublyLinkedNode<T> | undefined) {
        this._prev = newPrev;
    }
}