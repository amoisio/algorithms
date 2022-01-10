import QuickUnion from './quickUnion.js';


describe('Quick union algorithm', () => {

    test('Joins components by join p root to q root.', () => {
        let uf = new QuickUnion(10);

        expect(uf.data).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        uf.union(0, 1); 
        expect(uf.data).toStrictEqual([1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        uf.union(0, 2);
        expect(uf.data).toStrictEqual([1, 2, 2, 3, 4, 5, 6, 7, 8, 9]);
        uf.union(3, 4);
        expect(uf.data).toStrictEqual([1, 2, 2, 4, 4, 5, 6, 7, 8, 9]);
        uf.union(3, 5); 
        expect(uf.data).toStrictEqual([1, 2, 2, 4, 5, 5, 6, 7, 8, 9]);
        uf.union(6, 7);
        expect(uf.data).toStrictEqual([1, 2, 2, 4, 5, 5, 7, 7, 8, 9]);
        uf.union(8, 6); 
        expect(uf.data).toStrictEqual([1, 2, 2, 4, 5, 5, 7, 7, 7, 9]);
        uf.union(1, 4);
        expect(uf.data).toStrictEqual([1, 2, 5, 4, 5, 5, 7, 7, 7, 9]);
        uf.union(5, 6); 
        expect(uf.data).toStrictEqual([1, 2, 5, 4, 5, 7, 7, 7, 7, 9]);
        uf.union(8, 9); 
        expect(uf.data).toStrictEqual([1, 2, 5, 4, 5, 7, 7, 9, 7, 9]);
    });
});