import { LinkedList } from "./linkedList";

export interface IStack<T> {
    push(item: T): void;
    top(): T;
    pop(): T;
}

export default class Stack<T> implements IStack<T> {
    private readonly _data: LinkedList<T>; 
    constructor() {
        this._data = new LinkedList();
    }

    push(item: T): void {
        this._data.add(item);
    }
    top(): T {
        return this._data.get(0);
    }
    pop(): T {
        return this._data.remove();
    }
}