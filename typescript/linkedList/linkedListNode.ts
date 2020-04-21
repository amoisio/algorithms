import ILinkedListNode from "./iLinkedListNode";

export default class LinkedListNode<T> implements ILinkedListNode<T> {
    private _value ?: T;
    private _next ?: ILinkedListNode<T>;

    constructor() {
        this._value = undefined;
        this._next = undefined;
    }

    get next(): ILinkedListNode<T> | undefined {
        return this._next;
    }

    set next(node: ILinkedListNode<T> | undefined) {
        this._next = node;
    }

    get value(): T | undefined {
        return this._value;
    }

    set value(modifiedValue: T | undefined) {
        this._value = modifiedValue;
    }
}