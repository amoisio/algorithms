/**
 * Encapsulates performance measurements and metrics
 */
export default class PerformanceMeasurements {
    private _data: number[];
    private _index: number;

    constructor(n: number) {
        this._data = new Array<number>(n);
        this._index = 0;
    }

    get capacity(): number {
        return this._data.length;
    }

    get count(): number {
        return this._index;
    }

    get data(): number[] {
        return this._data.slice(0, this._index);
    }

    private get statData(): number[] {
        return this.data.filter(d => d != 0);
    }

    get min(): number {
        let tempData = this.statData;
        let len = tempData.length;
        let min = tempData[0];
        for(let i = 1; i < len; i++) {
            let tempMin = tempData[i];
            if (tempMin < min && tempMin != 0)
                min = tempMin;
        }
        return min;
    }

    get max(): number {
        let tempData = this.statData;
        let len = tempData.length;
        let max = tempData[0];
        for(let i = 1; i < len; i++) {
            let tempMax = tempData[i];
            if (tempMax > max)
                max = tempMax;
        }
        return max;
    }

    get average(): number {
        let tempData = this.statData;
        let len = tempData.length;
        let sum = tempData.reduce((previous, current) => previous + current);
        return sum / len;
    }

    get median(): number {
        let sorted = this.statData.sort((a, b) => a - b);
        let len = sorted.length;
        return sorted[Math.floor(len / 2)];
    }

    public add(measurement: number) {
        this._data[this._index++] = measurement;
    }

    public getStatistics(title: string): PerformanceStatistics {
        return new PerformanceStatistics(title, this);
    }
}

export class PerformanceStatistics {
    constructor(algorithm: string, measurements: PerformanceMeasurements) {
        this.algorithm = algorithm;
        this.n = measurements.count;
        this.min = measurements.min;
        this.max = measurements.max;
        this.avg = measurements.average;
        this.med = measurements.median;
    }

    public readonly algorithm: string;
    public readonly n: number;
    public readonly min: number;
    public readonly max: number;
    public readonly avg: number;
    public readonly med: number;
}