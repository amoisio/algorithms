import { normalize } from './utilities';

describe("Utility functions", () => {

    test("Normalize data", () => {
        let arr = [0, 1, 2, 3, 4];

        let normalized = normalize(arr);

        expect(normalized).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });
});