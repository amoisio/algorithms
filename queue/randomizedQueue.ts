import ICollection from "../collection/iCollection";
import IQueue from "./iQueue";

export default class RandomizedQueue<T> implements ICollection<T>, IQueue<T> {

    private readonly _array: (T | undefined)[];

    // Threshold for resizing _array
    private readonly _threshold: number;
    private _capacity: number;
    private _size: number;

    // construct an empty randomized queue
    constructor() {
        this._array = [];
        this._size = 0;
        this._capacity = 0;
        this._threshold = 0.5;
    }

    // return the number of items on the randomized queue
    size(): number {
        return this._size;
    }

    // is the randomized queue empty?
    isEmpty(): boolean {
        return this._size == 0;
    }

    // add the item
    // This can be O(N)
    queue(item: T): void {
        if (item == null || item == undefined) {
            throw Error("item cannot be null or undefined.");
        }
        this.compactArrayIfOverThreshold();
        this._array[this._capacity++] = item;
        this._size++;
    }

    // remove and return a random item
    dequeue(): T {
        if (this._size == 0)
            throw Error("Queue is empty.");
        
        this.compactArrayIfOverThreshold();
        let item = this.randomItem();
        this._array[item.index] = undefined;
        this._size--;
        return item.item;
    }

    private randomItem(): { index: number, item: T } {
        let index = this.index();
        let item = this._array[index];
        while (!item) {
            index = this.index();
            item = this._array[index];
        }
        return {index, item};
    }

    // return a random item (but do not remove it)
    sample(): T {
        if (this._size == 0)
            throw Error("Queue is empty.");
        
        return this.randomItem().item;
    }

    // return an independent iterator over items in random order
    [Symbol.iterator](): Iterator<T> {
        this.compactArray();
        let copiedArray = this.copyArray();
        this.shuffleArray(copiedArray);
        let current = 0;
        let size = this._size;
        return {
            next: () => {
                return (current == size)
                ? {done: true, value: undefined}
                // We can guarantee that copiedArray never contains undefined values, hence the '!'
                : {done: false, value: copiedArray[current++]!};
            }
        };
    }
    
    private index(): number {
        return Math.floor(Math.random() * this._capacity);
    }

    private compactArrayIfOverThreshold() {
        if (this.shouldCompactArray()) {
            this.compactArray();
        }
    }

    private shouldCompactArray(): boolean {
        return this._capacity > 0 
            ? this._size / this._capacity < this._threshold
            : false; 
    }

    /**
     * Compacts the data array by moving all non-undefined items
     * towards index 0.
     */
    private compactArray() {
        let step = 0;
        for (let i = 0; i < this._capacity; i++) {
            if (this._array[i] == undefined) {
                step++;
            } else if (step > 0) {
                this._array[i - step] = this._array[i];
                this._array[i] = undefined;
            }
        }
        
        for (let i = this._size; i < this._capacity; i++) {
            delete this._array[i];
        }
        
        this._capacity = this._size;
    }
    
    private copyArray(): (T | undefined)[] {
        let array: (T|undefined)[] = [];
        for (let i = 0; i < this._capacity; i++) {
            array[i] = this._array[i];
        }
        return array;
    }
    
    private shuffleArray(array: (T|undefined)[]): (T|undefined)[] {
        let size = array.length;
        for (let i = 0; i < size; i++) {
            let j = Math.floor(Math.random() * size);
            if (i != j) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
        return array;
    }
}