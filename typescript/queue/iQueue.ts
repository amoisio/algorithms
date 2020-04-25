export default interface IQueue<T> {
    queue(item: T): void;
    dequeue(): T;
}