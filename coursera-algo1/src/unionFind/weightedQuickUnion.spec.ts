import WeightedQuickUnion from "./weightedQuickUnion.js";

describe('Weighted quick union algorithm', () => {

    test('Joins components by joining the root of the smaller tree to the root of the larger tree ', () => {
        let uf = new WeightedQuickUnion(10);

        expect(uf.data).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        uf.union(0, 1);
        expect(uf.data).toStrictEqual([0, 0, 2, 3, 4, 5, 6, 7, 8, 9]);
        uf.union(0, 2);
        expect(uf.data).toStrictEqual([0, 0, 0, 3, 4, 5, 6, 7, 8, 9]);
        uf.union(3, 0);
        expect(uf.data).toStrictEqual([0, 0, 0, 0, 4, 5, 6, 7, 8, 9]);
        uf.union(5, 6);
        expect(uf.data).toStrictEqual([0, 0, 0, 0, 4, 5, 5, 7, 8, 9]);
        uf.union(5, 7);
        expect(uf.data).toStrictEqual([0, 0, 0, 0, 4, 5, 5, 5, 8, 9]);
        uf.union(3, 5);
        expect(uf.data).toStrictEqual([0, 0, 0, 0, 4, 0, 5, 5, 8, 9]);
    });
});