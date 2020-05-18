import iPerformanceMeasurer from "./iPerformanceMeasurer";
import PerformanceMeasurements, { PerformanceStatistics } from "./performanceMeasurements";
import { performance } from 'perf_hooks';

/**
 * Doubling measurement 
 * - Performs M experiments and reports performance data on the the experiments. Ie. performance statistics 
 *   should contain M 'raw' data points and associated statistics.
 * - For each experiment, perform an operation with provided data N times.
 * - Measure
 * - Perform a given operation N times with random data (e.g. add item to list)
 * - Record the time of each operation and after N trials. Record the average time. This value should be reported.
 * 
 * 
 */
export default class DoublingMeasurer implements iPerformanceMeasurer {
    private readonly _name: string;
    private readonly _experiments: number;
    private readonly _items: number;
    private readonly _measurements: PerformanceMeasurements;

    public reset: ((items: number) => void) | undefined = undefined;
    public execute: ((items: number) => void) | undefined = undefined;
    public report: ((count: number, duration: number) => void) | undefined = undefined;

    constructor(name: string, experiments: number, items: number) {
        this._name = name;
        this._experiments = experiments;
        this._items = items;
        this._measurements = new PerformanceMeasurements(this._experiments);
    }

    getStatistics(): PerformanceStatistics {

        if (this.reset === undefined){
            throw new Error("Reset method must be defined.");
        }

        if (this.execute === undefined) {
            throw new Error("Execute method must be defined.");
        }

        for(let i = 0; i < this._experiments; i++) {

            // Double the number of items for the experiment
            let items = this._items * Math.pow(2, i);
            this.reset(items);

            let t0 = performance.now();
            this.execute(items);
            let t1 = performance.now();
            let executionTime = Math.round((t1 - t0));
            
            this.report?.(items, executionTime);
            this._measurements.add(items, executionTime);
        }

        return this._measurements.getStatistics(this._name);
    }
}