import IQueue from "./iQueue";
import ICollection from "collection/iCollection";

export default class Queue<T> implements IQueue<T> {
    private readonly _data: ICollection<T>;

    constructor(data: ICollection<T>) {
        this._data = data;
    }

    queue(item: T): void {
        throw new Error("Method not implemented.");
    }
    dequeue(): T {
        throw new Error("Method not implemented.");
    }
    
}