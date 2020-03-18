import iPerformanceMeasurer from "../performance/iPerformanceMeasurer";
import PerformanceMeasurements from "../performance/performanceMeasurements";
import iUnionFind from "./iUnionFind";
import { performance } from 'perf_hooks';
import PerformanceStatistics from "../performance/performanceStatistics";

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
        this._measurements.add(duration);
    }
    connected(p: number, q: number): boolean {
        let t0 = performance.now();

        let result = this._unionFind.connected(p, q);

        let t1 = performance.now();
        let duration = Math.round((t1 - t0)*1000); // us
        this._measurements.add(duration);

        return result;
    }
    getMeasurements(): PerformanceMeasurements {
        return this._measurements;
    }
    getStatistics(): PerformanceStatistics {
        let name = this._name;
        let measurements = this.getMeasurements();
        return new PerformanceStatistics(name, measurements);
    }

}
