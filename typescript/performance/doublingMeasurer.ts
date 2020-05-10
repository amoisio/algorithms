import iPerformanceMeasurer from "./iPerformanceMeasurer";
import PerformanceStatistics from "./performanceMeasurements";

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
// export default class DoublingMeasurer implements iPerformanceMeasurer {
//     private readonly _experiments: number;
    
//     constructor(experiments: number) {
//         this._experiments = experiments;
//     }


//     getStatistics(): PerformanceStatistics {
//         throw new Error("Method not implemented.");
//     }
    
// }