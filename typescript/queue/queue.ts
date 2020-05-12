import IQueue from "./iQueue";
import ICollection from "collection/iCollection";

export default class Queue<T> implements IQueue<T> {
    private readonly _data: ICollection<T>;

    constructor(data: ICollection<T>) {
        this._data = data;
    }
    toArray(): T[] {
        return this._data.toArray();
    }

    queue(item: T): void {
        this._data.add(item);
    }
    
    dequeue(): T {
        return this._data.remove(0);
    }
    
}