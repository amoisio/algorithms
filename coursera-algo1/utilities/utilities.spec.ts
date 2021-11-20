import { normalize, linearizeQuadratic, linearizeCubic, linearizeLogarithmic, linearizeExponential } from './utilities';

describe("Utility functions", () => {

    test("Normalize data", () => {
        let arr = [0, 1, 2, 3, 4];

        let normalized = normalize(arr);

        expect(normalized).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });

    test("Linear tranformation from quadratic data", () => {
        let data = [0, 1, 4, 9, 16];

        let linearized = linearizeQuadratic(data);

        expect(linearized).toEqual([0, 1, 2, 3, 4]);
    });

    test("Linear tranformation from cubic data", () => {
        let data = [0, 1, 8, 27, 64];

        let linearized = linearizeCubic(data);

        expect(linearized).toEqual([0, 1, 2, 3, 4]);
    });

    test("Linear tranformation from exponential data", () => {
        let data = [Math.exp(1), Math.exp(2), Math.exp(3), Math.exp(4)];

        let linearized = linearizeExponential(data);

        expect(linearized).toEqual([1, 2, 3, 4]);
    });

    test("Linear tranformation from logarithmic data", () => {
        let data = [Math.log(1), Math.log(2), Math.log(3), Math.log(4)];

        let linearized = linearizeLogarithmic(data);

        expect(linearized[0]).toBeCloseTo(1, 9);
        expect(linearized[1]).toBeCloseTo(2, 9);
        expect(linearized[2]).toBeCloseTo(3, 9);
        expect(linearized[3]).toBeCloseTo(4, 9);
    });
});