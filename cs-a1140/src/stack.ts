import ResizableArray from "./resizableArray";

export interface IStack<T> {
    push(item: T): void;
    top(): T;
    pop(): T;
}

export default class Stack<T> implements IStack<T> {
    private readonly _data: ResizableArray<T>; 
    constructor() {
        this._data = new ResizableArray(16);
    }

    push(item: T): void {
        this._data.push(item);
    }
    top(): T {
        let index = this._data.size - 1;
        return this._data.get(index);
    }
    pop(): T {
        return this._data.pop();
    }
}