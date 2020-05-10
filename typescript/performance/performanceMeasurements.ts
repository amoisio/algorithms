import Statistics from '../utilities/statistics';

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

    private getStatisticsData(): number[] {
        return this._data.slice(0, this._index);
    }

    public add(measurement: number) {
        this._data[this._index++] = measurement;
    }

    public getStatistics(title: string, filter ?: (value: number, index: number, array: number[]) => unknown | undefined): PerformanceStatistics {
        let stats = new Statistics();
        let data = this.getStatisticsData();
        stats.compute(data);
        
        if (filter !== undefined)
            data = data.filter(filter);

        return { algorithm: title, statistics: stats };
    }
}

export type PerformanceStatistics = {
    algorithm: string,
    statistics: Statistics
};