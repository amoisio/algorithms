import iUnionFind from './iUnionFind';
import QuickFind from './quickFind';
import QuickUnion from './quickUnion';
import WeightedQuickUnion from './weightedQuickUnion';
import WQUPC from './wqupc';

describe('Union find algorithms', () => {

    const size = 10;
    const cases: [string, () => iUnionFind][] = [
        ["QuickFind", () => new QuickFind(size)],
        ["QuickUnion", () => new QuickUnion(size)],
        ["WQU", () => new WeightedQuickUnion(size)],
        ["WQUPC", () => new WQUPC(size)]
    ];
        
    test.each(cases)('%s.initializes properly', (name, factory) => {
        let qf = factory();
        expect((qf as any).data).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect((qf as any).size).toBe(10);
    });
    
    test.each(cases)('%s.union connects disconnected components', (name, factory) => {
        let uf = factory();
        expect(uf.connected(0, 1)).toBeFalsy();
        expect(uf.connected(1, 2)).toBeFalsy();
        expect(uf.connected(2, 3)).toBeFalsy();
    
        uf.union(0, 1);
        uf.union(2, 3);
    
        expect(uf.connected(0, 1)).toBeTruthy();
        expect(uf.connected(1, 0)).toBeTruthy();
        expect(uf.connected(2, 3)).toBeTruthy();
        expect(uf.connected(3, 2)).toBeTruthy();
        expect(uf.connected(1, 2)).toBeFalsy();
        expect(uf.connected(2, 1)).toBeFalsy();
    
        uf.union(1, 2);
    
        expect(uf.connected(0, 1)).toBeTruthy();
        expect(uf.connected(0, 2)).toBeTruthy();
        expect(uf.connected(0, 3)).toBeTruthy();
        expect(uf.connected(1, 2)).toBeTruthy();
        expect(uf.connected(1, 3)).toBeTruthy();
        expect(uf.connected(2, 3)).toBeTruthy();        
    });
    
    test.each(cases)('%s.connected checks if items are connected', (name, factory) => {
        let uf = factory();

        expect(uf.connected(0, 1)).toBeFalsy();
    
        uf.union(0, 1);
        
        expect(uf.connected(0, 1)).toBeTruthy();
    });
});

