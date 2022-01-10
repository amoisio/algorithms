import PerformanceMeasurements from "../performance/performanceMeasurements.js";
import Statistics from "../utilities/statistics.js";

describe('Performance measurements', () => {

    const performanceMeasurements = new PerformanceMeasurements(10);
    let stats: Statistics;
    beforeAll(() => {
        performanceMeasurements.add(3);
        performanceMeasurements.add(5);
        performanceMeasurements.add(5);
        performanceMeasurements.add(8);
        performanceMeasurements.add(9);
        performanceMeasurements.add(11);
        performanceMeasurements.add(10);
        performanceMeasurements.add(5);
        performanceMeasurements.add(3);
        performanceMeasurements.add(6);

        stats = performanceMeasurements.getStatistics("test", undefined).statistics;

        // total 65
    });

    test('.min gets the minimum measurement', () => {
        expect(stats.min).toBe(3);
    });

    test('.max gets the maximum measurement', () => {
        expect(stats.max).toBe(11);
    });

    test('.avg gets the average of all measurements', () => {
        expect(stats.mean).toBe(6.5);
    });
});