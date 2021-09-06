import { LinkedList } from "./linkedList";

export interface IQueue<T> {
    enqueue(item : T): void;
    dequeue(): T;
}

export default class Queue<T> implements IQueue<T> {
    private readonly _data: LinkedList<T>; 
    constructor() {
        this._data = new LinkedList();
    }
    enqueue(item: T): void {
        this._data.push(item);
    }
    dequeue(): T {
        return this._data.remove();
    }
}