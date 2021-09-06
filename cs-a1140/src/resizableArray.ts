/**
 * Array size growth constant.
 */
export const alpha = 1.5;

export default class ResizableArray<T>  implements Iterator<T> {
    private _size: number;
    private _array: Array<T>;

    constructor(capacity: number) {
        this._array = new Array<T>(capacity);
        this._size = 0;
    }

    get capacity(): number {
        return this._array.length;
    }

    get size(): number {
        return this._size;
    }

    public get(index: number): T {
        if (index < 0 || index >= this._size)
            throw new Error("Index out of bounds.");

        return this._array[index];
    }

    public set(index: number, value: T) {
        if (index < 0 || index >= this._size)
            throw new Error("Index out of bounds.");

        this._array[index] = value;
    }

    public push(value: T) {
        if (this._size == this.capacity) {
            let newCapacity = alpha * this.capacity;
            let newArray = new Array<T>(newCapacity);
            for (let i = 0; i < this._size; i++) {
                newArray[i] = this._array[i];
            }
            this._array = newArray;
        }
        this._array[this._size++] = value;
    }

    public pop(): T {
        let value = this._array[this._size - 1];
        this._size--;

        if (this._size <= Math.floor(this.capacity / (2 * alpha))) {
            let newCapacity = Math.floor(this.capacity / alpha);
            let newArray = new Array<T>(newCapacity);
            for (let i = 0; i < this._size; i++) {
                newArray[i] = this._array[i];
            }
            this._array = newArray;
        }
        
        return value;
    }

    public toArray() : T[] {
        return this._array.slice(0, this._size);
    }

    private _index = 0;
    public next(): IteratorResult<T> {
        const done = (this._index >= this._size - 1);
        const value: T = done ? this._array[this._size - 1] : this._array[this._index++];
        return { done, value }
    }
}