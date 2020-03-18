export default interface iUnionFind {
    union(p: number, q: number): void;
    connected(p: number, q: number): boolean;
}