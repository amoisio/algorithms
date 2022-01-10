/**
 * Generate value for the given data points.
 * @param x Data points for which to generate data.
 * @param valueGenerator Generator method which takes in a data point and returns a generated value.
 * @param errorGenerator Random variation generator
 */
export default function generateData(x: number[], valueGenerator : (x: number) => number, errorGenerator ?: () => number): [number[], number[]] {
    let y = x.map(d => valueGenerator(d) + (errorGenerator === undefined ? 0 : errorGenerator()));
    return [x, y];
}