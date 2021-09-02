export default class ResizableInt16Array {
    private readonly _alpha: number = 2;
    private _capacity: number;
    private _size: number;
    private _array: Int16Array;

    constructor(capacity: number) {
        this._capacity = capacity;
        this._array = new Int16Array(capacity);
        this._size = 0;
    }
    
    public get(index: number): number {
        return this._array[index];
    }

    public set(index: number, value: number) {
        this._array[index] = value;
    }

    public push(value: number) {
        if (this._size == this._capacity) {
            let newCapacity = this._alpha * this._capacity;
            let newArray = new Int16Array(newCapacity);
            for (let i = 0; i < this._size; i++) {
                newArray[i] = this._array[i];
            }
            this._array = newArray;
            this._capacity = newCapacity;
        }
        this._array[this._size++] = value;
    }

    get capacity(): number {
        return this._capacity;
    }

    get size(): number {
        return this._size;
    }

    public print() {
        console.log(this._array);
    }
}