import { DoublyLinkedList } from "./doublyLinkedList";

export interface IDeque<T> {
    pushFront(item : T): void;
    pushBack(item: T): void;
    popFront(): T;
    popBack(): T;
    toArray(): T[];
}

export default class Deque<T> implements IDeque<T> {
    private readonly _data: DoublyLinkedList<T>; 
    constructor() {
        this._data = new DoublyLinkedList();
    }
    pushFront(item: T): void {
        this._data.add(item);
    }
    pushBack(item: T): void {
        this._data.push(item);
    }
    popFront(): T {
        return this._data.remove();
    }
    popBack(): T {
        return this._data.pop();
    }
    
    toArray(): T[] {
        return this._data.toArray();
    }
}