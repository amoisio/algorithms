import PerformanceMeasurements from "./performanceMeasurements"

export default class PerformanceStatistics {
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