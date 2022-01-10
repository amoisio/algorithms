export default interface iUnionFind {
    union(p: number, q: number): void;
    connected(p: number, q: number): boolean;
}

/**
 * union find constructor type
 */
export type UnionFindConstructor = new (size: number) => iUnionFind;
