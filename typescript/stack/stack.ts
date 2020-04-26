import IStack from "./iStack";
import ICollection from "collection/iCollection";

export default class Stack<T> implements IStack<T> {
    private readonly _data: ICollection<T>;

    constructor(data: ICollection<T>) {
        this._data = data;
    }

    toArray(): T[] {
        return this._data.toArray();
    }

    push(item: T): void {
        this._data.add(item);
    }
    
    pop(): T {
        return this._data.remove(this._data.size - 1);
    }
    
}