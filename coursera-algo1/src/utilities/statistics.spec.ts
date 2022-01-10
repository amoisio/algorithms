import Statistics from './statistics.js';

const data = [
    43, 44, 45, 46, 47, 48, 49,
    42,	21,	22,	23,	24,	25,	26,
    41,	20,	7,	8,	9,	10,	27,
    40,	19,	6,	1,	2,	11,	28,
    39,	18,	5,	4,	3,	12,	29,
    38,	17,	16,	15,	14,	13,	30,
    37,	36,	35,	34,	33,	32,	31];

describe("Statistics computations", () => {

    let stats: Statistics;

    beforeAll(() => {
        stats = new Statistics();
        stats.compute(data);
    })

    test("min", () => {
        expect(stats.min).toBe(1);
    });
    test("max", () => {
        expect(stats.max).toBe(49);
    });
    test("count", () => {
        expect(stats.count).toBe(49);
    });
    test("mean", () => {
        expect(stats.mean).toBe(25);
    });
    test("median", () => {
        expect(stats.median).toBe(25);
    });
    test("variance", () => {
        expect(stats.variance).toBeCloseTo(204.1666667, 3);
    });
    test("stddev", () => {
        expect(stats.stddev).toBeCloseTo(14.28869017, 3);
    });
    test("confidence low", () => {
        expect(stats.confidenceLo).toBeCloseTo(20.99916675, 3);
    });
    test("confidence high", () => {
        expect(stats.confidenceHi).toBeCloseTo(29.00083325, 3);
    });
});