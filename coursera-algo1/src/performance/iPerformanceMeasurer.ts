import { PerformanceStatistics }  from "./performanceMeasurements.js";

export default interface iPerformanceMeasurer {
    getStatistics(): PerformanceStatistics;
}