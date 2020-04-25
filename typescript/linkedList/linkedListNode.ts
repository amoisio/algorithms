import ILinkedListNode from "./iLinkedListNode";

export default class LinkedListNode<T> implements ILinkedListNode<T> {
    private _value : T;
    private _next ?: ILinkedListNode<T>;

    constructor(value: T) {
        this._value = value;
        this._next = undefined;
    }

    get next(): ILinkedListNode<T> | undefined {
        return this._next;
    }

    set next(node: ILinkedListNode<T> | undefined) {
        this._next = node;
    }

    get value(): T {
        return this._value;
    }

    set value(modifiedValue: T) {
        this._value = modifiedValue;
    }
}