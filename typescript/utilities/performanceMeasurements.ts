export default class PerformanceMeasurements {
    private _data: number[];
    private _index: number;
    private _length: number;

    constructor(n: number) {
        this._data = new Array<number>(n);
        this._index = 0;
        this._length = n;
    }

    get size(): number {
        return this._length;
    }

    get count(): number {
        return this._index;
    }

    get data(): number[] {
        return this._data.slice(0, this._index);
    }

    get min(): number {
        return Math.min(...this.data);
    }

    get max(): number {
        return Math.max(...this.data);
    }

    get average(): number {
        return this.sum / this.size;
    }

    public add(measurement: number) {
        if (this._index == this._length) {
            throw new Error("Performance measurements array is already full. Unable to add new measurement.");
        } else {
            this._data[this._index++] = measurement;
        }
    }

    private get sum(): number {
        return this.data.reduce((previous, current) => previous + current);
    }
}