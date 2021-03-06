import WQUPC from "./wqupc.js";

describe('Weighted quick union with path compression algorithm', () => {

    test('Joins components by joining the root of the smaller tree to the root of the larger tree. Paths are compressed point to the root element.', () => {
        let uf = new WQUPC(10);
                      
        expect(uf.data).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        uf.union(0, 1);
        expect(uf.data).toStrictEqual([0, 0, 2, 3, 4, 5, 6, 7, 8, 9]);
        uf.union(0, 2);
        expect(uf.data).toStrictEqual([0, 0, 0, 3, 4, 5, 6, 7, 8, 9]);
        uf.union(3, 4);
        expect(uf.data).toStrictEqual([0, 0, 0, 3, 3, 5, 6, 7, 8, 9]);
        uf.union(3, 5);
        expect(uf.data).toStrictEqual([0, 0, 0, 3, 3, 3, 6, 7, 8, 9]);
        uf.union(6, 7);
        expect(uf.data).toStrictEqual([0, 0, 0, 3, 3, 3, 6, 6, 8, 9]);
        uf.union(8, 6);
        expect(uf.data).toStrictEqual([0, 0, 0, 3, 3, 3, 6, 6, 6, 9]);
        uf.union(1, 4);
        expect(uf.data).toStrictEqual([0, 0, 0, 0, 3, 3, 6, 6, 6, 9]);
        uf.union(5, 6);
        expect(uf.data).toStrictEqual([0, 0, 0, 0, 3, 0, 0, 6, 6, 9]);
        uf.union(8, 9);
        expect(uf.data).toStrictEqual([0, 0, 0, 0, 3, 0, 0, 6, 0, 0]);
    });
});