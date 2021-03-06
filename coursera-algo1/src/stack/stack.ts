import IStack from "./iStack.js";
import DoublyLinkedList from "../linkedLists/doublyLinkedList.js";
import IDeque from "../collection/iDeque.js";

export default class Stack<T> implements IStack<T> {
    private readonly _storage: IDeque<T>;

    constructor() {
        this._storage = new DoublyLinkedList<T>();
    }

    size(): number {
        return this._storage.size();
    }

    isEmpty(): boolean {
        return this._storage.isEmpty();
    }

    push(item: T): void {
        this._storage.addFirst(item);
    }
    
    pop(): T {
        return this._storage.removeFirst();
    }

    [Symbol.iterator](): Iterator<T> {
        return this._storage[Symbol.iterator]();
    }
}