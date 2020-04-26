export default interface IStack<T> {
    push(item: T): void;
    pop(): T;
    toArray(): T[];
}