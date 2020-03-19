import { PerformanceStatistics }  from "./performanceMeasurements";

export default interface iPerformanceMeasurer {
    getStatistics(): PerformanceStatistics;
}