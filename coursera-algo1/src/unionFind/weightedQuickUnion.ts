import iUnionFind from "./iUnionFind.js";

export default class WeightedQuickUnion implements iUnionFind {
    public readonly size: number;
    public readonly data: number[];
    public readonly sizes: number[];

    constructor(size:number) {
        this.size = size;

        this.data = new Array<number>(size);
        this.sizes = new Array<number>(size);
        for(let i = 0; i < size; i++) {
            this.data[i] = i;
            this.sizes[i] = 1;
        }
    }

    public union(p: number, q: number) {
        let pRoot = this.findRoot(p);
        let qRoot = this.findRoot(q);

        if (pRoot == qRoot)
            return;

        let pSize = this.sizes[pRoot];
        let qSize = this.sizes[qRoot];

        if (pSize < qSize) {
            this.data[pRoot] = qRoot;  
            this.sizes[qRoot] += this.sizes[pRoot];
        } else {
            this.data[qRoot] = pRoot;
            this.sizes[pRoot] += this.sizes[qRoot];
        }
    }

    public connected(p: number, q: number): boolean {
        let pRoot = this.findRoot(p);
        let qRoot = this.findRoot(q);
        return pRoot == qRoot;
    }

    private findRoot(p: number): number {
        let i = p;
        while(this.data[i] != i){
            i = this.data[i];
        }
        return i;
    }
}