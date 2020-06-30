import ICollection from "collection/iCollection";
import IQueue from "./iQueue";

export default class RandomizedQueue<T> implements ICollection<T>, IQueue<T> {
    size(): number {
        throw new Error("Method not implemented.");
    }    

    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }

    queue(item: T): void {
        throw new Error("Method not implemented.");
    }

    dequeue(): T {
        throw new Error("Method not implemented.");
    }

    sample(): T {
        throw new Error("Method not implemented.");
    }

    [Symbol.iterator](): Iterator<T> {
        throw new Error("Method not implemented.");
    }
}