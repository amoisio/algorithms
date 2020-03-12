import PerformanceMeasurements from "../utilities/performanceMeasurements";

describe('Performance measurements', () => {

    const performanceMeasurements = new PerformanceMeasurements(10);
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

        // total 65
    });

    test('.min gets the minimum measurement', () => {
        expect(performanceMeasurements.min).toBe(3);
    });

    test('.max gets the maximum measurement', () => {
        expect(performanceMeasurements.max).toBe(11);
    });

    test('.avg gets the average of all measurements', () => {
        expect(performanceMeasurements.average).toBe(6.5);
    });

    test('Attempting to add new measurements gives an error', () => {
        expect(() => performanceMeasurements.add(1)).toThrow();
    });
    
});