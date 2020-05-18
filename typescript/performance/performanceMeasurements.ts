import Statistics from '../utilities/statistics';

/**
 * Encapsulates performance measurements and metrics
 */
export default class PerformanceMeasurements {
    private readonly _costs: number[];
    private readonly _loads: number[];
    private _index: number;

    constructor(n: number) {
        this._costs = new Array<number>(n);
        this._loads = new Array<number>(n);

        this._index = 0;
    }

    private getStatisticsData(): number[] {
        return this._loads.slice(0, this._index);
    }

    public add(load: number, cost: number) {
        this._costs[this._index] = cost;
        this._loads[this._index] = load;
        this._index++;
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