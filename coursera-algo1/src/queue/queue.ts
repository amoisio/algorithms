import IQueue from "./iQueue.js";
import DoublyLinkedList from "../linkedLists/doublyLinkedList.js";

export default class Queue<T> implements IQueue<T> {
    
    private readonly _storage: DoublyLinkedList<T>;

    constructor() {
        this._storage = new DoublyLinkedList<T>();
    }

    queue(item: T): void {
        this._storage.addFirst(item);
    }
    
    dequeue(): T {
        return this._storage.removeLast();
    }
    
    size(): number {
        return this._storage.size();
    }

    isEmpty(): boolean {
        return this._storage.isEmpty();
    }

    [Symbol.iterator](): Iterator<T> {
        return this._storage[Symbol.iterator]();
    }
}