import iPerformanceMeasurer from "../../performance/iPerformanceMeasurer";
import PerformanceMeasurements, { PerformanceStatistics } from "../../performance/performanceMeasurements";
import iUnionFind from "../iUnionFind";
import { performance } from 'perf_hooks';

export default class PerformanceWrapper implements iUnionFind, iPerformanceMeasurer {
    
    private _name: string;
    private _unionFind: iUnionFind;
    private _measurements: PerformanceMeasurements;

    constructor(name: string, unionFind: iUnionFind, capacity: number) {
        this._name = name;
        this._unionFind = unionFind;
        this._measurements = new PerformanceMeasurements(capacity);
    }
    
    union(p: number, q: number): void {
        let t0 = performance.now();

        this._unionFind.union(p, q);

        let t1 = performance.now();
        let duration = Math.round((t1 - t0)*1000); // us
        this._measurements.add(1, duration);
    }

    connected(p: number, q: number): boolean {
        let t0 = performance.now();

        let result = this._unionFind.connected(p, q);

        let t1 = performance.now();
        let duration = Math.round((t1 - t0)*1000); // us
        this._measurements.add(1, duration);

        return result;
    }

    getStatistics(): PerformanceStatistics {
        // Get statistics and drop measurements that are equal to 0 (These are redundant operations)
        return this._measurements.getStatistics(this._name, d => d != 0);
    }
}
