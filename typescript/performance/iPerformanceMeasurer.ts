import PerformanceMeasurements from "./performanceMeasurements";
import PerformanceStatistics from "./performanceStatistics";

export default interface iPerformanceMeasurer {
    getMeasurements(): PerformanceMeasurements;
    getStatistics(): PerformanceStatistics;
}